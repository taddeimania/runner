ig.module('game.entities.locks.yellowLock').requires('game.entities.locks.baseLock').defines(function() {
  return window.EntityYellowLock = EntityBaseLock.extend({
    colorIndex: 0,
    color: 'yellow',
    name: 'EntityYellowLock',
    unlockEvent: function() {
      var func;
      this.parent();
      return func = new Function(this.triggerEvent).bind(this)();
    }
  });
});
