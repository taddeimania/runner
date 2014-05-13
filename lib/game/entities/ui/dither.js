ig.module('game.entities.ui.dither').requires('game.entities.ui.baseUIButton').defines(function() {
  window.EntityDither = window.EntityBaseUIButton.extend({
    animSheet: new ig.AnimationSheet('media/dither.png', 320, 480),
    size: {
      x: 320,
      y: 480
    },
    clickHandler: function() {}
  });
});
