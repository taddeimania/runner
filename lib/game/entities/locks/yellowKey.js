ig.module('game.entities.locks.yellowKey').requires('game.entities.locks.baseKey').defines(function() {
  return window.EntityYellowKey = EntityBaseKey.extend({
    colorIndex: 0,
    color: 'Yellow',
    name: 'EntityYellowKey'
  });
});
