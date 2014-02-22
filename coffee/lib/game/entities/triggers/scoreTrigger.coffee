ig.module('game.entities.triggers.scoreTrigger')
.requires(
  'impact.entity'
).defines ->
  window.EntityScoreTrigger = ig.Entity.extend
    size:
      x: 10
      y: 200
    checkAgainst: ig.Entity.TYPE.BOTH
    _wmDrawBox: true
    _wmBoxColor: 'rgba(196, 255, 0, 0.7)'
    activated: true
    check: (other) ->
      if @activated
        window.SCORE += 1
        @activated = false
  return
