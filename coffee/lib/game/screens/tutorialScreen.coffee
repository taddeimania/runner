ig.module('game.screens.tutorialScreen')
.requires(
  'game.levels.tutorialLevel'
  'game.screens.mainScreen'
).defines ->

  window.TutorialScreen = window.MainScreen.extend

    get_starting_level: ->
      window.LevelTutorialLevel

    draw: ->
      @parent()
      camera_x = ig.game.screen.x + 18
      if @guy
        @screen.x = @guy.pos.x - 100

