ig.module('game.entities.ui.retry')
.requires(
  'game.entities.ui.baseUIButton'
).defines ->
  window.EntityRetry = window.EntityBaseUIButton.extend
    animSheet: new ig.AnimationSheet 'media/retry.png', 167, 37
    size:
      x: 167
      y: 37
    clickHandler: ->
      window.SCORE = ig.game.startingScore
      ig.system.setGame window.CURRENT_GAME
  return
