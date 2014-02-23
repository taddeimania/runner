ig.module('game.entities.obstructions.fourBlocks')
.requires(
  'impact.entity'
).defines ->
  window.EntityFourBlocks = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/4blocks.png', 32, 128
    colorIndex: 0
    color: undefined
    size:
      x: 32
      y: 128
    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.FIXED
    checkAgainst: ig.Entity.TYPE.A
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'base', 1, [0]
      @currentAnim = @anims.base
  return
