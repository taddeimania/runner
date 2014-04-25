ig.module('game.entities.ui.pause').requires('game.entities.ui.baseUIButton').defines(function() {
  window.EntityPause = window.EntityBaseUIButton.extend({
    animSheet: new ig.AnimationSheet('media/pause.png', 1, 1),
    size: {
      x: 50,
      y: 47
    },
    draw: function() {},
    clickHandler: function() {
      var started, _ref;
      started = ig.game.getEntitiesByType('EntityStartTrigger')[0];
      ig.game.tracking = (_ref = ig.game.tracking === false) != null ? _ref : {
        "true": false
      };
      if (started.activated) {
        ig.game.tracking = false;
      }
      return ig.game.pause();
    }
  });
});
