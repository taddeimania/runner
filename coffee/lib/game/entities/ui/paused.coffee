ig.module('game.entities.ui.paused')
.requires(
  'game.entities.ui.baseUIButton'
).defines ->
  window.EntityPaused = window.EntityBaseUIButton.extend
    animSheet: new ig.AnimationSheet 'media/paused.png', 167, 37
    size:
      x: 167
      y: 37
    clickHandler: ->
  return
