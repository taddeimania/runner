ig.module('game.entities.locks.baseKey').requires('impact.entity').defines(function() {
  window.EntityBaseKey = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/keys.png', 28, 16),
    colorIndex: 0,
    color: void 0,
    size: {
      x: 28,
      y: 16
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.NEVER,
    name: void 0,
    gravityFactor: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('color', 1, [this.colorIndex]);
      return this.currentAnim = this.anims.color;
    },
    update: function() {
      return this.parent();
    },
    draw: function() {
      return this.parent();
    }
  });
});