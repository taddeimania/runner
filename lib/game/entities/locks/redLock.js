ig.module('game.entities.locks.redLock').requires('game.entities.locks.baseLock').defines(function() {
  return window.EntityRedLock = EntityBaseLock.extend({
    colorIndex: 2,
    color: 'red',
    name: 'EntityRedLock',
    unlockEvent: function() {
      var func;
      this.parent();
      return func = new Function(this.triggerEvent).bind(this)();
    }
  });
});
