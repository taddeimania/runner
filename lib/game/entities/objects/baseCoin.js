ig.module('game.entities.objects.baseCoin').requires('impact.entity').defines(function() {
  window.EntityBaseCoin = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/keys.png', 32, 32),
    size: {
      x: 32,
      y: 32
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.NEVER,
    gravityFactor: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('base', 1, [0]);
      return this.currentAnim = this.anims.base;
    }
  });
});
