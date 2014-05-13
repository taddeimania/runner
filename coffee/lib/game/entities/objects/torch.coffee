ig.module('game.entities.objects.torch')
.requires(
  'impact.entity'
).defines ->
  window.EntityTorch = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/torch.png', 16, 32
    size:
      x: 16
      y: 32
    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.NEVER
    gravityFactor: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'burn', 0.5, [0, 1]
      @currentAnim = @anims.burn
    update: ->

  return
