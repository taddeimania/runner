ig.module('game.entities.locks.greenKey').requires('game.entities.locks.baseKey').defines(function() {
  return window.EntityGreenKey = EntityBaseKey.extend({
    colorIndex: 1,
    color: 'green',
    name: 'EntityGreenKey'
  });
});