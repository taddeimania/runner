ig.module('game.entities.objects.baseCoin').requires('impact.entity').defines(function() {
  window.EntityBaseCoin = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/coins.png', 32, 32),
    size: {
      x: 32,
      y: 32
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.NEVER,
    checkAgainst: ig.Entity.TYPE.A,
    gravityFactor: 0,
    value: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('base', 1, [0]);
      return this.currentAnim = this.anims.base;
    },
    check: function(other) {
      if (other === ig.game.guy) {
        window.SCORE += this.value;
        this.kill();
      }
      return this.parent();
    }
  });
});
