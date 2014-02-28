ig.module('game.entities.locks.redLock').requires('game.entities.locks.baseLock').defines(function() {
  return window.EntityRedLock = EntityBaseLock.extend({
    colorIndex: 2,
    color: 'Red',
    name: 'EntityRedLock'
  });
});
