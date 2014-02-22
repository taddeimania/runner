ig.module('game.entities.ui.logo').requires('impact.entity').defines(function() {
  window.EntityLogo = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/logo.png', 286, 39),
    size: {
      x: 286,
      y: 39
    },
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('normal', 1, [0]);
      return this.currentAnim = this.anims.normal;
    }
  });
});
