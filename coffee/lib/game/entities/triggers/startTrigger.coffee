ig.module('game.entities.triggers.startTrigger')
.requires(
    'impact.entity'
).defines ->
  lr.EntityStartTrigger = ig.Entity.extend
    size:
      x: 10
      y: 200
    checkAgainst: ig.Entity.TYPE.BOTH
    _wmDrawBox: true
    _wmBoxColor: 'rgba(0, 0, 255, 0.7)'
    activated: true
    check: (other) ->
      if @activated
        ig.game.tracking = true
        this.activated = false
