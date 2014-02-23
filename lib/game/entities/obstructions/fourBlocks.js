ig.module('game.entities.obstructions.fourBlocks').requires('impact.entity').defines(function() {
  window.EntityFourBlocks = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/4blocks.png', 32, 128),
    colorIndex: 0,
    color: void 0,
    size: {
      x: 32,
      y: 128
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.FIXED,
    checkAgainst: ig.Entity.TYPE.A,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('base', 1, [0]);
      return this.currentAnim = this.anims.base;
    }
  });
});
