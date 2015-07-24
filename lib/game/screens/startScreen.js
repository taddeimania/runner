ig.module('game.screens.startScreen').requires('impact.game', 'impact.font', 'impact.sound', 'game.levels.title', 'game.screens.baseScreen').defines(function() {
  return window.StartScreen = window.BaseScreen.extend({
    init: function() {
      ig.music.add('media/music/hyperbole_looped.ogg');
      ig.music.volume = 0.1;
      ig.music.play();
      this.logo = ig.game.spawnEntity(window.EntityLogo, 24, 74);
      this.play = ig.game.spawnEntity(window.EntityPlay, 60, 190);
      ig.input.bind(ig.KEY.MOUSE1, 'click');
      this.loadLevel(LevelTitle);
      this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
      return this.screen.x = this.guy.pos.x - 100;
    },
    update: function() {
      this.parent();
      if (this.play.clicked()) {
        ig.input.unbind(ig.KEY.MOUSE1);
        return ig.system.setGame(window.MainScreen);
      }
    },
    draw: function() {
      var camera_x;
      camera_x = ig.game.screen.x + 18;
      this.logo.pos.x = this.guy.pos.x - 81;
      this.logo.pos.y = Math.sin((this.logo.pos.x / 50) * 8) + 90;
      this.play.pos.x = this.guy.pos.x + 5;
      if (this.guy) {
        this.screen.x = this.guy.pos.x - 100;
      }
      this.parent();
      this.font.draw(window.VERSION, 25, 65, ig.Font.ALIGN.LEFT);
      this.font.draw('00000', 300, 65, ig.Font.ALIGN.RIGHT);
      this.logo.draw();
      return this.play.draw();
    }
  });
});
