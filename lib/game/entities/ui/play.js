ig.module('game.entities.ui.play').requires('impact.entity').defines(function() {
  window.EntityPlay = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/play.png', 137, 13),
    size: {
      x: 167,
      y: 33
    },
    offset: {
      x: -15,
      y: -10
    },
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('normal', 1, [0]);
      return this.currentAnim = this.anims.normal;
    },
    clicked: function() {
      return ig.input.pressed('click') && (ig.input.mouse.y > this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && (ig.input.mouse.x + ig.game.screen.x > this.pos.x && ig.input.mouse.x + ig.game.screen.x < this.pos.x + this.size.x);
    }
  });
});
