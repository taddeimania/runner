ig.module('game.entities.ui.border')
.requires(
  'impact.entity'
).defines ->
  window.EntityBorder = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/uitopborder.png', 320, 107
    size:
      x: 320
      y: 107
    gravityFactor: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'normal', 1, [0]
      @currentAnim = @anims.normal
  return
