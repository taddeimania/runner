ig.module('game.entities.locks.blueLock').requires('game.entities.locks.baseLock').defines(function() {
  return window.EntityBlueLock = EntityBaseLock.extend({
    colorIndex: 3,
    color: 'Blue',
    name: 'EntityBlueLock'
  });
});
