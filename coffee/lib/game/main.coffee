RunnerGame = null

ig.module(
  'game.main'
).requires(
  'impact.game',
  'game.levels.title',
  'impact.font'
).defines ->

  RunnerGame = ig.Game.extend
    font: new ig.Font 'media/04b03.font.png'
    init: ->
      @loadLevel LevelTitle

    update: ->
      @parent()

    draw: ->
      @parent()
      x = ig.system.width/2
      y = ig.system.height/2
      @screen.x += 2

      @font.draw 'It Works!', x, y, ig.Font.ALIGN.CENTER


  ig.main '#canvas', RunnerGame, 60, 320, 480, 1
