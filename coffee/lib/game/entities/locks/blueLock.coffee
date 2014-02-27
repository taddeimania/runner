ig.module('game.entities.locks.blueLock')
.requires(
  'game.entities.locks.baseLock'
).defines ->
  window.EntityBlueLock = EntityBaseLock.extend
    colorIndex: 3
    color: 'Blue'
    name: 'EntityBlueLock'
