ig.module('game.entities.objects.threeHighEdge')
.requires(
  'impact.entity'
).defines ->
  window.EntityThreeHighEdge = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/3highedge.png', 32, 96
    size:
      x: 32
      y: 96
    checkAgainst: ig.Entity.TYPE.A
    collides: ig.Entity.COLLIDES.FIXED
    gravityFactor: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'base', 1, [0]
      @currentAnim = @anims.base
  return
