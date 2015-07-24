ig.module('game.screens.startScreen')
.requires(
  'impact.game'
  'impact.font'
  'impact.sound'
  'game.levels.title'
  'game.screens.baseScreen'
).defines ->

  window.StartScreen = window.BaseScreen.extend
    init: ->
      ig.music.add 'media/music/hyperbole_looped.ogg'
      ig.music.volume = 0.1
      ig.music.play()
      # TODO: Make a tutorial button
      # TODO: Make a credits button
      # TODO: Cleanup play now button
      @logo = ig.game.spawnEntity window.EntityLogo, 24, 74
      @play = ig.game.spawnEntity window.EntityPlay, 60, 190
      ig.input.bind ig.KEY.MOUSE1, 'click'
      @loadLevel(LevelTitle)
      @guy = ig.game.getEntitiesByType('EntityGuy')[0]
      @screen.x = @guy.pos.x - 100

    update: ->
      @parent()
      if @play.clicked()
        ig.input.unbind ig.KEY.MOUSE1
        ig.system.setGame window.MainScreen

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

