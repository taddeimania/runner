ig.module('game.entities.locks.yellowLock')
.requires(
  'game.entities.locks.baseLock'
).defines ->
  window.EntityYellowLock = EntityBaseLock.extend
    colorIndex: 0
    color: 'Yellow'
    name: 'EntityYellowLock'
