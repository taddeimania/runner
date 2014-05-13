ig.module('game.entities.triggers.padTrigger')
.requires(
  'game.entities.triggers.genericTrigger'
).defines ->
  window.EntityPadTrigger = EntityGenericTrigger.extend
    size:
      x: 32
      y: 4
    _wmBoxColor: 'rgba(100, 0, 0, 0.7)'
    check: ->
      @parent()
      if not @soundPlayed
        @soundPlayed = true
        ig.transportSound.play()
  return
