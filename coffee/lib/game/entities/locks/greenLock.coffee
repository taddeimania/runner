ig.module('game.entities.locks.greenLock')
.requires(
  'game.entities.locks.baseLock'
).defines ->
  window.EntityGreenLock = EntityBaseLock.extend
    colorIndex: 1
    color: 'Green'
    name: 'EntityGreenLock'
