ig.module('game.entities.locks.blueKey').requires('game.entities.locks.baseKey').defines(function() {
  return window.EntityBlueKey = EntityBaseKey.extend({
    colorIndex: 3,
    color: 'blue',
    name: 'EntityBlueKey'
  });
});
