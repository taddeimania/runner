ig.module('game.entities.ui.quit')
.requires(
    'game.entities.ui.baseUIButton'
).defines ->
  window.EntityQuit = window.EntityBaseUIButton.extend
    animSheet: new ig.AnimationSheet 'media/quit.png', 130, 40
    size:
      x: 130
      y: 40
    clickHandler: ->
      window.SCORE = 0
      window.CURRENT_LEVEL = undefined
      ig.system.setGame(window.StartScreen)
  return
