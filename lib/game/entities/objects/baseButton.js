ig.module('game.entities.objects.baseButton').requires('impact.entity').defines(function() {
  window.EntityBaseButton = ig.Entity.extend({
    size: {
      x: 32,
      y: 32
    },
    type: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.FIXED,
    checkAgainst: ig.Entity.TYPE.A,
    gravityFactor: 0,
    pressed: false,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.addAnim('up', 1, [0]);
      this.addAnim('down', 1, [1]);
      return this.currentAnim = this.anims.up;
    },
    triggerEvent: function() {},
    update: function() {},
    pressDown: function() {
      this.pressed = true;
      this.currentAnim = this.anims.down;
      this.size.y = 20;
      this.offset.y = 12;
      return this.pos.y += 12;
    },
    collideWith: function(other, axis) {
      if (axis === "y" && !this.pressed) {
        this.pressDown();
        return new Function(this.triggerEvent).bind(this)();
      }
    }
  });
});
