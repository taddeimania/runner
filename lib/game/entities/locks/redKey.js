ig.module('game.entities.locks.redKey').requires('game.entities.locks.baseKey').defines(function() {
  return window.EntityRedKey = EntityBaseKey.extend({
    colorIndex: 2,
    color: 'red',
    name: 'EntityRedKey'
  });
});
