ig.module('game.entities.objects.baseCoin').requires('impact.entity').defines(function() {
  window.EntityBaseCoin = ig.Entity.extend({
    COLOR_INDEX: {
      copper: 0,
      silver: 1,
      gold: 2
    },
    color: "copper",
    animSheet: new ig.AnimationSheet('media/coins.png', 32, 32),
    size: {
      x: 16,
      y: 16
    },
    offset: {
      x: 8,
      y: 8
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.NEVER,
    checkAgainst: ig.Entity.TYPE.A,
    value: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('base', 1, [this.COLOR_INDEX[this.color]]);
      return this.currentAnim = this.anims.base;
    },
    update: function() {},
    check: function(other) {
      if (other === ig.game.guy) {
        ig.coinSound.play();
        window.SCORE += this.value;
        this.kill();
      }
      return this.parent();
    }
  });
});
