ig.module('game.entities.ui.baseUIButton').requires('impact.entity').defines(function() {
  window.EntityBaseUIButton = ig.Entity.extend({
    gravityFactor: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('normal', 1, [0]);
      return this.currentAnim = this.anims.normal;
    },
    update: function() {
      if (this.clicked()) {
        this.clickHandler();
      }
      return this.parent();
    },
    clicked: function() {
      return ig.input.pressed('jump') && (ig.input.mouse.y > this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && (ig.input.mouse.x + ig.game.screen.x > this.pos.x && ig.input.mouse.x + ig.game.screen.x < this.pos.x + this.size.x);
    }
  });
});
