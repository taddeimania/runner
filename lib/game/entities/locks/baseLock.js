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
    update: function() {
      return this.parent();
    },
    draw: function() {
      return this.parent();
    },
    unlockEvent: function() {
      return this.currentAnim = this.anims.grey;
    }
  });
});
