var RunnerGame;

RunnerGame = null;

ig.module('game.main').requires('impact.game', 'game.levels.title', 'impact.font').defines(function() {
  RunnerGame = ig.Game.extend({
    font: new ig.Font('media/04b03.font.png'),
    init: function() {
      return this.loadLevel(LevelTitle);
    },
    update: function() {
      return this.parent();
    },
    draw: function() {
      var x, y;
      this.parent();
      x = ig.system.width / 2;
      y = ig.system.height / 2;
      this.screen.x += 2;
      return this.font.draw('It Works!', x, y, ig.Font.ALIGN.CENTER);
    }
  });
  return ig.main('#canvas', RunnerGame, 60, 320, 480, 1);
});
