ig.module('game.entities.objects.baseButton')
.requires(
  'impact.entity'
).defines ->
  window.EntityBaseButton = ig.Entity.extend
    size:
      x: 32
      y: 32
    type: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.FIXED
    checkAgainst: ig.Entity.TYPE.A
    gravityFactor: 0
    pressed: false
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'up', 1, [0]
      @addAnim 'down', 1, [1]
      @currentAnim = @anims.up
    triggerEvent: ->
    update: ->
    pressDown: ->
      @pressed = true
      @currentAnim = @anims.down
      @size.y = 20
      @offset.y = 12
      @pos.y += 12
    collideWith: (other, axis) ->
      if axis == "y" and !@pressed
        @pressDown()
        new Function(@triggerEvent).bind(@)()
    
  return
