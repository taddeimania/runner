ig.module('game.entities.triggers.startTrigger').requires('impact.entity').defines(function() {
  window.EntityStartTrigger = ig.Entity.extend({
    size: {
      x: 10,
      y: 200
    },
    checkAgainst: ig.Entity.TYPE.A,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(0, 0, 255, 0.7)',
    activated: true,
    update: function() {},
    draw: function() {},
    check: function(other) {
      if (this.activated) {
        ig.game.tracking = true;
        return this.activated = false;
      }
    }
  });
});
