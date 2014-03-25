ig.module('game.entities.triggers.finishLine')
.requires(
  'impact.entity'
).defines ->
  window.EntityFinishLine = ig.Entity.extend
    size:
      x: 10
      y: 200
    checkAgainst: ig.Entity.TYPE.A
    _wmDrawBox: true
    gravityFactor: 0
    _wmBoxColor: 'rgba(255, 0, 0, 0.7)'
    check: (other) ->
      other.finish @nextLevel
  return
