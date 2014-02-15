ig.module('game.main').requires('impact.game', 'game.entities.guy', 'game.levels.title').defines(function() {
  var RunnerGame;
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
  ig.main('#canvas', RunnerGame, 60, 320, 480, 1);
});
