ig.module('game.entities.guy')
.requires(
  'game.system.eventChain',
  'impact.entity'
).defines ->
  window.EntityGuy = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/guy.png', 32, 40
    inventory: []
    size:
      x: 26
      y: 34
    offset:
      x: 3
      y: 6
    maxVel:
      x: 1
      y: 300
    friction:
      x: 1
      y: 1
    accelAir: 600
    jump: 350
    velocity: 120
    type: ig.Entity.TYPE.A
    checkAgainst: ig.Entity.TYPE.B
    collides: ig.Entity.COLLIDES.ACTIVE
    finished: false
    init: (x, y, settings) ->
      @parent x, y, settings
      @vel.x = @velocity
      @addAnim 'idle', 1, [0]
      @addAnim 'walking', 0.1, [0, 1, 2]
      @currentAnim = @anims.idle

    update: ->
      if @finishEvent
        @finishEvent()

      if @vel.x < @velocity
        @vel.x = @velocity

      @checkVerticalMovement()
      @parent()

    draw: ->
      if @vel.x > 0
        @currentAnim = @anims.walking
      @parent()

    finish: (nextLevel) ->
      @finished = true
      @finishEvent = EventChain(@)
        .wait(2)
        .then ->
          ig.game.startingScore = window.SCORE
          @finished = false
          window.CURRENT_LEVEL = ig.global[nextLevel]
          ig.game.loadLevel window.CURRENT_LEVEL
          ig.game.guy = ig.game.getEntitiesByType('EntityGuy')[0]
          ig.game.uiBG = ig.game.spawnEntity window.EntityBorder, 143, 0
          ig.game.screen.x = ig.game.guy.pos.x
          ig.game.tracking = false
          ig.game.pauseButton = ig.game.spawnEntity window.EntityPause, ig.game.guy.pos.x + 40, 65

    checkVerticalMovement: ->
      if  @standing and ig.input.pressed('jump') and ig.input.mouse.y > 100
        @vel.y = -@jump

    check: (other) ->
      @parent()


  return
