ig.module('game.entities.objects.dynamicLedge').requires('impact.entity').defines(function() {
  window.EntityDynamicLedge = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/5wideledge.png', 160, 32),
    size: {
      x: 160,
      y: 32
    },
    checkAgainst: ig.Entity.TYPE.BOTH,
    collides: ig.Entity.COLLIDES.NONE,
    gravityFactor: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('base', 1, [0]);
      this.addAnim('invis', 1, [1]);
      return this.currentAnim = this.anims.invis;
    },
    reveal: function() {
      this.currentAnim = this.anims.base;
      return this.collides = ig.Entity.COLLIDES.FIXED;
    }
  });
});
