ig.module('game.entities.objects.baseCoin')
.requires(
  'impact.entity'
).defines ->
  window.EntityBaseCoin = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/coins.png', 32, 32
    size:
      x: 32
      y: 32
    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.NEVER
    gravityFactor: 0
    value: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'base', 1, [0]
      @currentAnim = @anims.base

  return
