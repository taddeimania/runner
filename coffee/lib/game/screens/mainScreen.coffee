ig.module('game.screens.mainScreen')
.requires(
  'impact.game'
  'impact.font'
  'impact.sound'
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
  'game.screens.baseScreen'
).defines ->

  window.MainScreen = window.BaseScreen.extend
    get_starting_level: ->
      # DEBUG: SET THIS TO WHATEVER LEVEL YOU WANT TO TEST LEVEL DESIGN
      window.LevelFirstLevel

    init: ->
      @uiBG = new ig.Image 'media/uitopborder.png'
      @inventory = new window.Inventory()
      @boot_sounds()
      @startingScore = window.SCORE
      window.CURRENT_GAME = window.MainScreen
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


