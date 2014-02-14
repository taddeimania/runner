RunnerGame = null

ig.module(
  'game.main'
).requires(
  'impact.game',
  'game.levels.title',
  'game.entities.guy',
  'impact.font'
).defines ->

  RunnerGame = ig.Game.extend
    init: ->
      @loadLevel LevelTitle

    update: ->
      @parent()

    draw: ->
      guy = ig.game.getEntitiesByType('EntityGuy')[0]
      guy_x = guy.pos.x
      @screen.x = guy_x - 100

      @parent()

  ig.main '#canvas', RunnerGame, 60, 320, 480, 1
