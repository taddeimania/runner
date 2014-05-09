ig.module('game.entities.objects.baseCoin')
.requires(
  'impact.entity'
).defines ->
  window.EntityBaseCoin = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/coins.png', 32, 32
    size:
      x: 22
      y: 22
    offset:
      x: 10
      y: 10

    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.NEVER
    checkAgainst: ig.Entity.TYPE.A
    gravityFactor: 0
    value: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'base', 1, [0]
      @currentAnim = @anims.base

    check: (other) ->
      if other == ig.game.guy
        # play ding sound
        window.SCORE += @value
        @kill()

      @parent()

  return
