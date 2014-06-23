window.VERSION = '0.08'
window.CURRENT_GAME = undefined
window.CURRENT_LEVEL = undefined
window.SCORE = 0
window.LIVES = 0

ig.module('game.main')
.requires(
  # 'impact.debug.debug'
  'impact.game'
  'impact.font'
  'impact.sound'
  'plugins.collision-map'
  'plugins.tween'
  'game.quotes'
  'game.entities.ui.logo'
  'game.entities.ui.dither'
  'game.entities.ui.play'
  'game.entities.ui.retry'
  'game.entities.ui.pause'
  'game.entities.ui.paused'
  'game.entities.ui.quit'
  'game.entities.guy'
  'game.inventory.inventory'
  'game.levels.tutorialLevel'
  'game.levels.firstLevel'
  'game.levels.secondLevel'
  'game.levels.thirdLevel'
  'game.levels.fourthLevel'
  'game.levels.fifthLevel'
  'game.levels.sixthLevel'
  'game.levels.title'
).defines ->

  window.BaseScreen = ig.Game.extend
    font: new ig.Font 'media/font.png'
    gravity: 800
    draw: ->
      @parent()
      if (@guy and !@guy.finished and @tracking)
        @screen.x += 2

  window.StartScreen = window.BaseScreen.extend
    init: ->
      ig.music.add 'media/music/hyperbole_looped.ogg'
      ig.music.volume = 0.3
      ig.music.play()
      # TODO: Make a tutorial button
      # TODO: Make a credits button
      # TODO: Cleanup play now button
      @logo = ig.game.spawnEntity window.EntityLogo, 24, 74
      @play = ig.game.spawnEntity window.EntityPlay, 60, 190
      ig.input.bind ig.KEY.MOUSE1, 'click'
      @loadLevel(LevelTitle)
      @guy = ig.game.getEntitiesByType('EntityGuy')[0]
      guy_x = @guy.pos.x
      @screen.x = guy_x - 100
    update: ->
      @parent()
      if @play.clicked()
        ig.input.unbind ig.KEY.MOUSE1
        # ig.system.setGame window.TutorialGame
        ig.system.setGame window.MainGame
    draw: ->
      camera_x = ig.game.screen.x + 18
      @logo.pos.x = @guy.pos.x - 81
      @logo.pos.y = Math.sin((@logo.pos.x / 50) * 8) + 90
      @play.pos.x = @guy.pos.x + 5
      if @guy
        @screen.x = @guy.pos.x - 100
      @parent()
      @font.draw window.VERSION, 25, 65, ig.Font.ALIGN.LEFT
      @font.draw '00000', 300, 65, ig.Font.ALIGN.RIGHT
      @logo.draw()
      @play.draw()


  window.MainGame = window.BaseScreen.extend
    get_starting_level: ->
      # DEBUG: SET THIS TO WHATEVER LEVEL YOU WANT TO TEST LEVEL DESIGN
      window.LevelFirstLevel

    init: ->
      @uiBG = new ig.Image 'media/uitopborder.png'
      @inventory = new window.Inventory()
      @boot_sounds()
      @startingScore = window.SCORE
      window.CURRENT_GAME = window.MainGame
      if !window.CURRENT_LEVEL
          window.CURRENT_LEVEL = @get_starting_level()
      ig.input.bind ig.KEY.MOUSE1, 'jump'
      @loadLevel window.CURRENT_LEVEL
      @guy = ig.game.getEntitiesByType('EntityGuy')[0]
      guy_x = @guy.pos.x
      @screen.x = guy_x
      @pauseButtonGraphic = new ig.Image 'media/pause.png'
      @pauseButton = ig.game.spawnEntity window.EntityPause, guy_x + 40, 35

    boot_sounds: ->
      ig.jumpSound = new ig.Sound('media/sound/jump.*')
      ig.coinSound = new ig.Sound('media/sound/coin.ogg')
      ig.deathSound = new ig.Sound('media/sound/death.ogg')
      ig.pickupKeySound = new ig.Sound('media/sound/pickup_key.ogg')
      ig.unlockSound = new ig.Sound('media/sound/unlock.ogg')
      ig.crashSound = new ig.Sound('media/sound/thud.ogg')
      ig.transportSound = new ig.Sound('media/sound/transport.ogg')

    update: ->
      @parent()
      if @deathCondition()
        @killGuy()
      @pauseButton.pos.x = @screen.x + 20

    draw: ->
      @parent()
      @uiBG.draw(0, 0)
      @pauseButtonGraphic.draw(40, 35)
      @inventory.draw()
      @font.draw window.SCORE.toString(), 300, 45, ig.Font.ALIGN.RIGHT

    deathCondition: ->
      @guy and ((@guy.pos.y > @screen.y + 480) or (@screen.x > @guy.pos.x + 40))

    pause: ->
      ig.Timer.timeScale = if ig.Timer.timeScale == 0 then 1 else 0
      @_paused = ig.Timer.timeScale == 0
      if @_paused
        @dither = ig.game.spawnEntity window.EntityDither, @screen.x, 0
        @paused_graphic = ig.game.spawnEntity window.EntityPaused, @screen.x + 80, 180
        ig.music.pause()
      else
        @paused_graphic.kill()
        @dither.kill()
        ig.music.play()

    killGuy: ->
      @pauseButton.kill()
      retry = ig.game.spawnEntity window.EntityRetry, @screen.x - 400, 180
      retry.tween({pos: {x: @screen.x + 80, y: 180}}, 0.25).start()
      quit = ig.game.spawnEntity window.EntityQuit, @screen.x + 400, 260
      quit.tween({pos: {x: @screen.x + 95, y: 260}}, 0.25).start()
      @guy.kill()
      window.LIVES -= 1
      ig.deathSound.play()
      delete @guy

  window.TransitionScreen = window.BaseScreen.extend
    gravity: 0
    get_quote: ->
      new window.Quotes().get_random_quote()
    init: ->
      @quote = @get_quote()
      @gameTimer = new ig.Timer()
      @logo = new ig.Image('media/logo.png')
      @guy = new ig.Image('media/guy.png')

    draw: ->
      @parent()
      @logo.draw(18, 50)
      @guy.draw(100, 200, 0, 0, 32, 40)
      @font.draw "x  #{window.LIVES}", 165, 215, ig.Font.ALIGN.LEFT
      @font.draw @quote, 160, 315, ig.Font.ALIGN.CENTER

    update: ->
      @parent()
      if @gameTimer.delta() > 2
        ig.system.setGame window.CURRENT_GAME

  window.DeathTransitionScreen = window.TransitionScreen.extend
    get_quote: ->
      new window.Quotes().get_random_bad_quote()

  window.TutorialGame = window.MainGame.extend
    # TODO: Skip button
    get_starting_level: ->
      window.LevelTutorialLevel
    draw: ->
      @parent()
      camera_x = ig.game.screen.x + 18
      if @guy
        @screen.x = @guy.pos.x - 100

  ig.System.scaleMode = ig.System.SCALE.CRISP
  ig.main '#canvas', window.StartScreen, 60, 320, 480, 1
  ig.soundManager.volume = 0.4

  return
