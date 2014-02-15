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
      @vel.x = 100
      @parent x, y, settings
      @addAnim 'idle', 1, [0]
      @addAnim 'walking', 0.1, [0, 1, 2]
      @currentAnim = @anims.idle

    draw: ->
      if @vel.x > 0
        @currentAnim = @anims.walking
      @parent()

  return
