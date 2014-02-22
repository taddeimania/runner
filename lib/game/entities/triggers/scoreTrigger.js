ig.module('game.entities.triggers.scoreTrigger').requires('impact.entity').defines(function() {
  window.EntityScoreTrigger = ig.Entity.extend({
    size: {
      x: 10,
      y: 200
    },
    checkAgainst: ig.Entity.TYPE.BOTH,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(196, 255, 0, 0.7)',
    activated: true,
    check: function(other) {
      if (this.activated) {
        window.SCORE += 1;
        return this.activated = false;
      }
    }
  });
});
