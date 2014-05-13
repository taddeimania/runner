ig.module('game.entities.objects.baseCoin')
.requires(
  'impact.entity'
).defines ->
  window.EntityBaseCoin = ig.Entity.extend
    COLOR_INDEX:
      copper: 0
      silver: 1
      gold: 2
    color: "copper"
    animSheet: new ig.AnimationSheet 'media/coins.png', 32, 32
    size:
      x: 16
      y: 16
    offset:
      x: 8
      y: 8

    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.NEVER
    checkAgainst: ig.Entity.TYPE.A
    value: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'base', 1, [@COLOR_INDEX[@color]]
      @currentAnim = @anims.base

    update: ->

    check: (other) ->
      if other == ig.game.guy
        # play ding sound
        ig.coinSound.play()
        window.SCORE += @value
        @kill()

      @parent()

  return
