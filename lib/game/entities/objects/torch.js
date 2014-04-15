ig.module('game.entities.objects.torch').requires('impact.entity').defines(function() {
  window.EntityTorch = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/torch.png', 16, 32),
    size: {
      x: 16,
      y: 32
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.NEVER,
    gravityFactor: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('burn', 0.5, [0, 1]);
      return this.currentAnim = this.anims.burn;
    }
  });
});
