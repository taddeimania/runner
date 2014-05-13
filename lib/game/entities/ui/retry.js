ig.module('game.entities.ui.retry').requires('game.entities.ui.baseUIButton').defines(function() {
  window.EntityRetry = window.EntityBaseUIButton.extend({
    animSheet: new ig.AnimationSheet('media/retry.png', 167, 37),
    size: {
      x: 167,
      y: 37
    },
    clickHandler: function() {
      window.SCORE = ig.game.startingScore;
      return ig.system.setGame(window.DeathTransitionScreen);
    }
  });
});
