ig.module('game.entities.ui.pause').requires('game.entities.ui.baseUIButton').defines(function() {
  window.EntityPause = window.EntityBaseUIButton.extend({
    animSheet: new ig.AnimationSheet('media/pause.png', 1, 1),
    size: {
      x: 50,
      y: 47
    },
    draw: function() {},
    clickHandler: function() {
      var ref, started;
      started = ig.game.getEntitiesByType('EntityStartTrigger')[0];
      ig.game.tracking = (ref = ig.game.tracking === false) != null ? ref : {
        "true": false
      };
      return ig.game.pause();
    }
  });
});
