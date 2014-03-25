ig.module('game.entities.objects.threeHighEdge').requires('impact.entity').defines(function() {
  window.EntityThreeHighEdge = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/3highedge.png', 32, 96),
    size: {
      x: 32,
      y: 96
    },
    checkAgainst: ig.Entity.TYPE.A,
    collides: ig.Entity.COLLIDES.FIXED,
    gravityFactor: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('base', 1, [0]);
      return this.currentAnim = this.anims.base;
    }
  });
});
