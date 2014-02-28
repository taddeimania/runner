ig.module('game.entities.locks.baseLock')
.requires(
  'impact.entity'
).defines ->
  window.EntityBaseLock = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/locks.png', 32, 32
    colorIndex: 0
    color: undefined
    size:
      x: 32
      y: 32
    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.NEVER
    checkAgainst: ig.Entity.TYPE.A
    name: undefined
    locked: true
    untouched: true
    gravityFactor: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'color', 1, [@colorIndex]
      @addAnim 'grey', 1, [4]
      @currentAnim = @anims.color
    check: (other) ->
      if @untouched
        if other.inventory.indexOf(@color) != -1
          @unlockEvent()
          @locked = false
          @untouched = false
        else
          @untouched = false
    unlockEvent: ->
      @currentAnim = @anims.grey
      func = new Function(@triggerEvent).bind(@)()

  return
