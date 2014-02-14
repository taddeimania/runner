var RunnerGame;

RunnerGame = null;

ig.module('game.main').requires('impact.game', 'game.levels.title', 'game.entities.guy', 'impact.font').defines(function() {
  RunnerGame = ig.Game.extend({
    init: function() {
      return this.loadLevel(LevelTitle);
    },
    update: function() {
      return this.parent();
    },
    draw: function() {
      var guy, guy_x;
      guy = ig.game.getEntitiesByType('EntityGuy')[0];
      guy_x = guy.pos.x;
      this.screen.x = guy_x - 100;
      return this.parent();
    }
  });
  return ig.main('#canvas', RunnerGame, 60, 320, 480, 1);
});
