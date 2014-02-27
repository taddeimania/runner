ig.module('game.entities.objects.twoSpikes').requires('impact.entity').defines(function() {
  window.EntityTwoSpikes = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/2topspikes.png', 64, 96),
    size: {
      x: 64,
      y: 96
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.FIXED,
    checkAgainst: ig.Entity.TYPE.A,
    gravityFactor: 0,
    friction: {
      x: 1,
      y: 1
    },
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('base', 1, [0]);
      return this.currentAnim = this.anims.base;
    },
    collideWith: function(other, axis) {
      if (axis === "y" && this.angleTo(other) > 0) {
        return ig.game.killGuy();
      }
    }
  });
});
