ig.module('game.entities.ui.retry')
.requires(
    'game.entities.ui.baseUIButton'
).defines ->
  lr.EntityRetry = EntityBaseUIButton.extend
    animSheet: new ig.AnimationSheet 'media/retry.png', 167, 37
    size:
      x: 167
      y: 37
    clickHandler: ->
      lr.SCORE = ig.game.startingScore
      ig.system.setGame lr.CURRENT_GAME
