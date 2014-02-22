ig.module('game.entities.ui.quit')
.requires(
    'game.entities.ui.baseUIButton'
).defines ->
  lr.EntityQuit = EntityBaseUIButton.extend
    animSheet: new ig.AnimationSheet 'media/quit.png', 130, 40
    size:
      x: 130
      y: 40
    clickHandler: ->
      lr.SCORE = 0
      lr.CURRENT_LEVEL = undefined
      ig.system.setGame(lr.StartScreen)
