ig.module('game.entities.objects.dynamicLedge')
.requires(
  'impact.entity'
).defines ->
  window.EntityDynamicLedge = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/5wideledge.png', 160, 32
    size:
      x: 160
      y: 32
    checkAgainst: ig.Entity.TYPE.A
    collides: ig.Entity.COLLIDES.NONE
    gravityFactor: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'base', 1, [0]
      @addAnim 'invis', 1, [1]
      @currentAnim = @anims.invis
    reveal: ->
      @currentAnim = @anims.base
      @collides = ig.Entity.COLLIDES.FIXED
  return
