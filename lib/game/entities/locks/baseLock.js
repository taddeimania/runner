ig.module('game.entities.locks.baseLock').requires('impact.entity').defines(function() {
  window.EntityBaseLock = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/locks.png', 32, 32),
    colorIndex: 0,
    color: void 0,
    size: {
      x: 32,
      y: 32
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.NEVER,
    checkAgainst: ig.Entity.TYPE.A,
    name: void 0,
    locked: true,
    untouched: true,
    gravityFactor: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('color', 1, [this.colorIndex]);
      this.addAnim('grey', 1, [4]);
      return this.currentAnim = this.anims.color;
    },
    unlockEvent: function() {
      var func;
      this.currentAnim = this.anims.grey;
      return func = new Function(this.triggerEvent).bind(this)();
    },
    update: function() {},
    check: function(other) {
      var lock_color;
      if (this.name.indexOf('Lock') !== -1 && this.untouched) {
        lock_color = this.name.split('Entity')[1].split('Lock')[0];
        if (ig.game.guy.inventory.indexOf(lock_color) !== -1) {
          ig.game.inventory.removeItem(lock_color + "Key");
          ig.unlockSound.play();
          this.unlockEvent();
          this.locked = false;
        }
        return this.untouched = false;
      }
    }
  });
});
