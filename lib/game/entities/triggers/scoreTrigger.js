ig.module('game.entities.triggers.scoreTrigger').requires('impact.entity').defines(function() {
  window.EntityScoreTrigger = ig.Entity.extend({
    size: {
      x: 10,
      y: 200
    },
    checkAgainst: ig.Entity.TYPE.A,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(196, 255, 0, 0.7)',
    activated: true,
    value: void 0,
    check: function(other) {
      if (this.activated) {
        window.SCORE += !this.value ? 1 : this.value;
        return this.activated = false;
      }
    }
  });
});
