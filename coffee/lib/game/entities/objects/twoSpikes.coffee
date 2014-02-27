ig.module('game.entities.objects.twoSpikes')
.requires(
  'impact.entity'
).defines ->
  window.EntityTwoSpikes = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/2topspikes.png', 64, 96
    size:
      x: 64
      y: 96
    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.FIXED
    checkAgainst: ig.Entity.TYPE.A
    gravityFactor: 0
    friction:
      x: 1
      y: 1
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'base', 1, [0]
      @currentAnim = @anims.base
    collideWith: (other, axis) ->
      if axis == "y" and @angleTo(other) > 0
        ig.game.killGuy()
    
  return
