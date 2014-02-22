window.lr = {};

window.VERSION = '0.03';

window.CURRENT_GAME = void 0;

window.CURRENT_LEVEL = void 0;

window.SCORE = 0;

ig.module('game.main').requires('impact.game', 'impact.font', 'impact.sound', 'plugins.collision-map', 'plugins.tween', 'game.entities.ui.logo', 'game.entities.ui.border', 'game.entities.ui.play', 'game.entities.ui.retry', 'game.entities.ui.pause', 'game.entities.ui.quit', 'game.entities.guy', 'game.levels.firstLevel', 'game.levels.secondLevel', 'game.levels.thirdLevel', 'game.levels.title').defines(function() {
  window.BaseScreen = ig.Game.extend({
    font: new ig.Font('media/font.png'),
    gravity: 800,
    draw: function() {
      this.parent();
      if (this.guy && !this.guy.finished && this.tracking) {
        return this.screen.x += 2;
      }
    }
  });
  window.StartScreen = window.BaseScreen.extend({
    init: function() {
      var guy_x;
      this.logo = ig.game.spawnEntity(window.EntityLogo, 24, 74);
      this.play = ig.game.spawnEntity(window.EntityPlay, 24, 154);
      ig.input.bind(ig.KEY.MOUSE1, 'click');
      this.loadLevel(LevelTitle);
      this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
      guy_x = this.guy.pos.x;
      return this.screen.x = guy_x - 100;
    },
    update: function() {
      this.parent();
      if (this.play.clicked()) {
        ig.input.unbind(ig.KEY.MOUSE1);
        return ig.system.setGame(window.MainGame);
      }
    },
    draw: function() {
      var camera_x;
      camera_x = ig.game.screen.x + 18;
      this.logo.pos.x = this.guy.pos.x - 81;
      this.logo.pos.y = Math.sin((this.logo.pos.x / 50) * 8) + 90;
      this.play.pos.x = this.guy.pos.x - 25;
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
  window.MainGame = window.BaseScreen.extend({
    init: function() {
      var guy_x;
      this.startingScore = window.SCORE;
      window.CURRENT_GAME = window.MainGame;
      if (!window.CURRENT_LEVEL) {
        window.CURRENT_LEVEL = LevelFirstLevel;
      }
      ig.input.bind(ig.KEY.MOUSE1, 'jump');
      this.loadLevel(window.CURRENT_LEVEL);
      this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
      guy_x = this.guy.pos.x;
      this.screen.x = guy_x;
      this.uiBG = ig.game.spawnEntity(window.EntityBorder, 143, 0);
      return this.pauseButton = ig.game.spawnEntity(window.EntityPause, guy_x + 40, 65);
    },
    update: function() {
      this.parent();
      if (this.deathCondition()) {
        this.pauseButton.kill();
        this.killGuy();
      }
      this.pauseButton.pos.x = this.screen.x + 40;
      return this.uiBG.pos.x = this.screen.x;
    },
    draw: function() {
      this.parent();
      if (this.retryTween || this.quitTween) {
        this.retryTween.draw();
        this.quitTween.draw();
      }
      return this.font.draw(window.SCORE.toString(), 300, 65, ig.Font.ALIGN.RIGHT);
    },
    deathCondition: function() {
      return this.guy && ((this.guy.pos.y > this.screen.y + 480) || (this.screen.x > this.guy.pos.x + 40));
    },
    pause: function() {
      ig.Timer.timeScale = ig.Timer.timeScale === 0 ? 1 : 0;
      return this._paused = ig.Timer.timeScale === 0;
    },
    killGuy: function() {
      var quit, retry;
      retry = ig.game.spawnEntity(window.EntityRetry, this.screen.x - 400, 180);
      retry.tween({
        pos: {
          x: this.screen.x + 80,
          y: 180
        }
      }, 0.25).start();
      quit = ig.game.spawnEntity(window.EntityQuit, this.screen.x + 400, 260);
      quit.tween({
        pos: {
          x: this.screen.x + 95,
          y: 260
        }
      }, 0.25).start();
      this.guy.kill();
      return delete this.guy;
    }
  });
  ig.System.scaleMode = ig.System.SCALE.CRISP;
  ig.main('#canvas', window.StartScreen, 60, 320, 480, 1);
});
