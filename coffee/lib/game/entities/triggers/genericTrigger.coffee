ig.module('game.entities.triggers.genericTrigger')
.requires(
  'impact.entity'
).defines ->
  window.EntityGenericTrigger = ig.Entity.extend
    size:
      x: 40
      y: 40
    checkAgainst: ig.Entity.TYPE.A
    _wmDrawBox: true
    _wmBoxColor: 'rgba(100, 0, 0, 0.7)'
    soundPlayed: false
    update: ->
    draw: ->
    check: (other) ->
      new Function(@triggerEvent).bind(@)()
  return
