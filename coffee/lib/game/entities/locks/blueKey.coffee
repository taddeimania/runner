ig.module('game.entities.locks.blueKey')
.requires(
  'game.entities.locks.baseKey'
).defines ->
  window.EntityBlueKey = EntityBaseKey.extend
    colorIndex: 3
    color: 'Blue'
    name: 'EntityBlueKey'
