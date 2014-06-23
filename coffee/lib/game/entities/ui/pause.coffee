ig.module('game.entities.ui.pause')
.requires(
  'game.entities.ui.baseUIButton'
).defines ->
  window.EntityPause = window.EntityBaseUIButton.extend
    animSheet: new ig.AnimationSheet 'media/pause.png', 1, 1
    size:
      x: 50
      y: 47
    draw: ->
    clickHandler: ->
      started = ig.game.getEntitiesByType('EntityStartTrigger')[0]
      ig.game.tracking = ig.game.tracking == false ? true : false
      ig.game.pause()

  return
