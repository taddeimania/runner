window.lr = {}   # Global Namespace

lr.VERSION = '0.03'
lr.CURRENT_GAME = undefined
lr.CURRENT_LEVEL = undefined
lr.SCORE = 0

ig.module('game.main')
.requires(
  'impact.game',
  'impact.font',
  'impact.sound',
  'plugins.collision-map',
  'plugins.tween',
  'game.entities.ui.logo',
  'game.entities.ui.border',
  'game.entities.ui.play',
  'game.entities.ui.retry',
  'game.entities.ui.pause',
  'game.entities.ui.quit',
  'game.entities.guy',
  'game.levels.firstLevel',
  'game.levels.secondLevel',
  'game.levels.thirdLevel',
  'game.levels.title'
).defines ->
  lr.BaseScreen = ig.Game.extend
    font: new ig.Font 'media/font.png'
    gravity: 800
    draw: ->
      @parent()
      if (@guy and !@guy.finished and @tracking)
        @screen.x += 2

  lr.StartScreen = BaseScreen.extend
    init: ->
      # ig.music.add('media/music/theme.ogg');
      # ig.music.volume = 0.1;
      # ig.music.play();
      @logo = ig.game.spawnEntity lr.EntityLogo, 24, 74
      @play = ig.game.spawnEntity lr.EntityPlay, 24, 154
      ig.input.bind ig.KEY.MOUSE1, 'click'
      @loadLevel(LevelTitle)
      @guy = ig.game.getEntitiesByType('EntityGuy')[0]
      guy_x = @guy.pos.x
      @screen.x = guy_x - 100

    update: ->
      @parent()
      if @play.clicked()
        ig.input.unbind ig.KEY.MOUSE1
        ig.system.setGame lr.MainGame
    draw: ->
      camera_x = ig.game.screen.x + 18
      @logo.pos.x = @guy.pos.x - 81
      @logo.pos.y = Math.sin((@logo.pos.x / 50) * 8) + 90
      @play.pos.x = @guy.pos.x - 25
      if @guy
        @screen.x = @guy.pos.x - 100
      @parent()
      @font.draw lr.VERSION, 25, 65, ig.Font.ALIGN.LEFT
      @font.draw '00000', 300, 65, ig.Font.ALIGN.RIGHT
      @logo.draw()
      @play.draw()

    lr.MainGame = BaseScreen.extend
      init: ->
        @startingScore = lr.SCORE
        lr.CURRENT_GAME = lr.MainGame
        if !lr.CURRENT_LEVEL
            lr.CURRENT_LEVEL = LevelFirstLevel
        ig.input.bind ig.KEY.MOUSE1, 'jump'
        # DEBUG: SET THIS TO WHATEVER LEVEL YOU WANT TO TEST LEVEL DESIGN
        lr.CURRENT_LEVEL = LevelThirdLevel
        # END DEBUG
        @loadLevel lr.CURRENT_LEVEL
        @guy = ig.game.getEntitiesByType('EntityGuy')[0]
        guy_x = @guy.pos.x
        @screen.x = guy_x
        @uiBG = ig.game.spawnEntity lr.EntityBorder, 143, 0
        @pauseButton = ig.game.spawnEntity lr.EntityPause, guy_x + 40, 65

      update: ->
        @parent()
        if @deathCondition()
          @pauseButton.kill()
          @killGuy()
        @pauseButton.pos.x = @screen.x + 40
        @uiBG.pos.x = @screen.x

      draw: ->
        @parent()
        if @retryTween or @quitTween
          @retryTween.draw()
          @quitTween.draw()

        @font.draw lr.SCORE.toString(), 300, 65, ig.Font.ALIGN.RIGHT

      deathCondition: ->
        @guy and ((@guy.pos.y > @screen.y + 480) or (@screen.x > @guy.pos.x + 40))

      pause: ->
        ig.Timer.timeScale = (ig.Timer.timeScale == 0 ? 1 : 0)
        @_paused = ig.Timer.timeScale == 0

      killGuy: ->
        retry = ig.game.spawnEntity lr.EntityRetry, @screen.x - 400, 180
        retry.tween({pos: {x: @screen.x + 80, y: 180}}, 0.25).start()
        quit = ig.game.spawnEntity lr.EntityQuit, @screen.x + 400, 260
        quit.tween({pos: {x: @screen.x + 95, y: 260}}, 0.25).start()
        @guy.kill()
        delete @guy

    ig.System.scaleMode = ig.System.SCALE.CRISP
    ig.main '#canvas', lr.StartScreen, 60, 320, 480, 1
