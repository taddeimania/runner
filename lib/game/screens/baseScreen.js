ig.module('game.screens.baseScreen').requires('impact.game', 'impact.font').defines(function() {
  return window.BaseScreen = ig.Game.extend({
    font: new ig.Font('media/font.png'),
    gravity: 800,
    draw: function() {
      this.parent();
      if (this.guy && !this.guy.finished && this.tracking) {
        return this.screen.x += 2;
      }
    }
  });
});
