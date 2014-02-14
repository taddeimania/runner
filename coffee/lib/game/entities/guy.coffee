EntityGuy = null

ig.module(
    'game.entities.guy'
).requires(
    'impact.entity'
).defines ->

  EntityGuy = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/guy.png', 32, 40
    size:
      x: 32
      y: 40
    init: (x, y, settings) ->
      @accel.x = 10
      @parent x, y, settings
      @addAnim 'idle', 1, [0]
      @addAnim 'walking', 0.1, [0, 1]
      @currentAnim = @anims.idle

    draw: ->
      if @accel.x > 0
        @currentAnim = @anims.walking
      @parent()
