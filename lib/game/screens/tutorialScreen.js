ig.module('game.screens.tutorialScreen').requires('game.levels.tutorialLevel', 'game.screens.mainScreen').defines(function() {
  return window.TutorialScreen = window.MainScreen.extend({
    get_starting_level: function() {
      return window.LevelTutorialLevel;
    },
    draw: function() {
      var camera_x;
      this.parent();
      camera_x = ig.game.screen.x + 18;
      if (this.guy) {
        return this.screen.x = this.guy.pos.x - 100;
      }
    }
  });
});
