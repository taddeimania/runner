ig.module('game.entities.ui.quit').requires('game.entities.ui.baseUIButton').defines(function() {
  window.EntityQuit = window.EntityBaseUIButton.extend({
    animSheet: new ig.AnimationSheet('media/quit.png', 130, 40),
    size: {
      x: 130,
      y: 40
    },
    clickHandler: function() {
      window.SCORE = 0;
      window.LIVES = 0;
      window.CURRENT_LEVEL = void 0;
      return ig.system.setGame(window.StartScreen);
    }
  });
});
