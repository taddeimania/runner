ig.module('game.screens.mainScreen').requires('impact.game', 'impact.font', 'impact.sound', 'plugins.tween', 'game.quotes', 'game.entities.ui.logo', 'game.entities.ui.dither', 'game.entities.ui.play', 'game.entities.ui.retry', 'game.entities.ui.pause', 'game.entities.ui.paused', 'game.entities.ui.quit', 'game.entities.guy', 'game.inventory.inventory', 'game.levels.tutorialLevel', 'game.levels.firstLevel', 'game.levels.secondLevel', 'game.levels.thirdLevel', 'game.levels.fourthLevel', 'game.levels.fifthLevel', 'game.levels.sixthLevel', 'game.levels.title', 'game.screens.baseScreen').defines(function() {
  return window.MainScreen = window.BaseScreen.extend({
    get_starting_level: function() {
      return window.LevelFirstLevel;
    },
    init: function() {
      var guy_x;
      this.uiBG = new ig.Image('media/uitopborder.png');
      this.inventory = new window.Inventory();
      this.boot_sounds();
      this.startingScore = window.SCORE;
      window.CURRENT_GAME = window.MainScreen;
      if (!window.CURRENT_LEVEL) {
        window.CURRENT_LEVEL = this.get_starting_level();
      }
      ig.input.bind(ig.KEY.MOUSE1, 'jump');
      this.loadLevel(window.CURRENT_LEVEL);
      this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
      guy_x = this.guy.pos.x;
      this.screen.x = guy_x;
      this.pauseButtonGraphic = new ig.Image('media/pause.png');
      return this.pauseButton = ig.game.spawnEntity(window.EntityPause, guy_x + 40, 35);
    },
    boot_sounds: function() {
      ig.jumpSound = new ig.Sound('media/sound/jump.*');
      ig.coinSound = new ig.Sound('media/sound/coin.ogg');
      ig.deathSound = new ig.Sound('media/sound/death.ogg');
      ig.pickupKeySound = new ig.Sound('media/sound/pickup_key.ogg');
      ig.unlockSound = new ig.Sound('media/sound/unlock.ogg');
      ig.crashSound = new ig.Sound('media/sound/thud.ogg');
      return ig.transportSound = new ig.Sound('media/sound/transport.ogg');
    },
    update: function() {
      this.parent();
      if (this.deathCondition()) {
        this.killGuy();
      }
      return this.pauseButton.pos.x = this.screen.x + 20;
    },
    draw: function() {
      this.parent();
      this.uiBG.draw(0, 0);
      this.pauseButtonGraphic.draw(40, 35);
      this.inventory.draw();
      return this.font.draw(window.SCORE.toString(), 300, 45, ig.Font.ALIGN.RIGHT);
    },
    deathCondition: function() {
      return this.guy && ((this.guy.pos.y > this.screen.y + 480) || (this.screen.x > this.guy.pos.x + 40));
    },
    pause: function() {
      ig.Timer.timeScale = ig.Timer.timeScale === 0 ? 1 : 0;
      this._paused = ig.Timer.timeScale === 0;
      if (this._paused) {
        this.dither = ig.game.spawnEntity(window.EntityDither, this.screen.x, 0);
        this.paused_graphic = ig.game.spawnEntity(window.EntityPaused, this.screen.x + 80, 180);
        return ig.music.pause();
      } else {
        this.paused_graphic.kill();
        this.dither.kill();
        return ig.music.play();
      }
    },
    killGuy: function() {
      var quit, retry;
      this.pauseButton.kill();
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
      window.LIVES -= 1;
      ig.deathSound.play();
      return delete this.guy;
    }
  });
});
