ig.module('game.entities.locks.baseKey').requires('impact.entity').defines(function() {
  window.EntityBaseKey = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/keys.png', 28, 16),
    colorIndex: 0,
    color: void 0,
    size: {
      x: 28,
      y: 16
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.NEVER,
    checkAgainst: ig.Entity.TYPE.A,
    name: void 0,
    gravityFactor: 0,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('color', 1, [this.colorIndex]);
      return this.currentAnim = this.anims.color;
    },
    check: function(other) {
      var key_color;
      if (other === ig.game.guy) {
        key_color = this.name.split('Entity')[1];
        ig.game.guy.inventory.push(this.color);
        ig.game.inventory.addItem(key_color);
        this.kill();
      }
      return this.parent();
    }
  });
});
