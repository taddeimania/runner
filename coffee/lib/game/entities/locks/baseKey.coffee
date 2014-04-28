ig.module('game.entities.locks.baseKey')
.requires(
  'impact.entity'
).defines ->
  window.EntityBaseKey = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/keys.png', 28, 16
    colorIndex: 0
    color: undefined
    size:
      x: 28
      y: 16
    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.NEVER
    checkAgainst: ig.Entity.TYPE.A
    name: undefined
    gravityFactor: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'color', 1, [@colorIndex]
      @currentAnim = @anims.color

    check: (other) ->
      if other == ig.game.guy
        key_color = @name.split('Entity')[1]
        ig.game.guy.inventory.push @color
        ig.game.inventory.addItem key_color
        @kill()
      @parent()

  return
