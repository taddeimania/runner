ig.module('game.entities.triggers.genericTrigger').requires('impact.entity').defines(function() {
  window.EntityGenericTrigger = ig.Entity.extend({
    size: {
      x: 40,
      y: 40
    },
    checkAgainst: ig.Entity.TYPE.A,
    _wmDrawBox: true,
    _wmBoxColor: 'rgba(100, 0, 0, 0.7)',
    check: function(other) {
      return new Function(this.triggerEvent).bind(this)();
    }
  });
});
