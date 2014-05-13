ig.module('game.entities.triggers.padTrigger').requires('game.entities.triggers.genericTrigger').defines(function() {
  window.EntityPadTrigger = EntityGenericTrigger.extend({
    size: {
      x: 32,
      y: 4
    },
    _wmBoxColor: 'rgba(100, 0, 0, 0.7)',
    check: function() {
      this.parent();
      if (!this.soundPlayed) {
        this.soundPlayed = true;
        return ig.transportSound.play();
      }
    }
  });
});
