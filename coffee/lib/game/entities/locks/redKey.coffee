ig.module('game.entities.locks.redKey')
.requires(
  'game.entities.locks.baseKey'
).defines ->
  window.EntityRedKey = EntityBaseKey.extend
    colorIndex: 2
    color: 'Red'
    name: 'EntityRedKey'
