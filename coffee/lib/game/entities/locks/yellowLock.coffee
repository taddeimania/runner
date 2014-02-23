ig.module('game.entities.locks.yellowLock')
.requires(
  'game.entities.locks.baseLock'
).defines ->
  window.EntityYellowLock = EntityBaseLock.extend
    colorIndex: 0
    color: 'yellow'
    name: 'EntityYellowLock'
    unlockEvent: ->
      @parent()
      ig.game.getEntityByName(@triggerName).kill()
