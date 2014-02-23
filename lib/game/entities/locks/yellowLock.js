ig.module('game.entities.locks.yellowLock').requires('game.entities.locks.baseLock').defines(function() {
  return window.EntityYellowLock = EntityBaseLock.extend({
    colorIndex: 0,
    color: 'yellow',
    name: 'EntityYellowLock',
    unlockEvent: function() {
      this.parent();
      return ig.game.getEntityByName(this.triggerName).kill();
    }
  });
});
