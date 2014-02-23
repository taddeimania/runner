ig.module('game.entities.locks.redLock')
.requires(
  'game.entities.locks.baseLock'
).defines ->
  window.EntityRedLock = EntityBaseLock.extend
    colorIndex: 2
    color: 'red'
    name: 'EntityRedLock'
