window.VERSION = '0.08';

window.CURRENT_GAME = void 0;

window.CURRENT_LEVEL = void 0;

window.SCORE = 0;

window.LIVES = 0;

ig.module('game.main').requires('impact.game', 'impact.font', 'impact.sound', 'plugins.collision-map', 'plugins.tween', 'game.quotes', 'game.entities.ui.logo', 'game.entities.ui.dither', 'game.entities.ui.play', 'game.entities.ui.retry', 'game.entities.ui.pause', 'game.entities.ui.paused', 'game.entities.ui.quit', 'game.entities.guy', 'game.inventory.inventory', 'game.levels.tutorialLevel', 'game.levels.firstLevel', 'game.levels.secondLevel', 'game.levels.thirdLevel', 'game.levels.fourthLevel', 'game.levels.fifthLevel', 'game.levels.sixthLevel', 'game.levels.title').defines(function() {
  window.BaseScreen = ig.Game.extend({
    font: new ig.Font('media/font.png'),
    gravity: 800,
    draw: function() {
      this.parent();
      if (this.guy) {
        if (this.guy.pos && this.guy.pos.y < 250) {
          this.screen.y = this.guy.pos.y - 250;
        }
        if (!this.guy.finished && this.tracking) {
          return this.screen.x += 2;
        }
      }
    }
  });
  window.StartScreen = window.BaseScreen.extend({
    init: function() {
      var guy_x;
      ig.music.add('media/music/intro.mp3');
      ig.music.volume = 0.3;
      this.logo = ig.game.spawnEntity(window.EntityLogo, 24, 74);
      this.play = ig.game.spawnEntity(window.EntityPlay, 60, 190);
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
  window.MainGame = window.BaseScreen.extend({
    get_starting_level: function() {
      return window.LevelSixthLevel;
    },
    init: function() {
      var guy_x;
      this.uiBG = new ig.Image('media/uitopborder.png');
      this.inventory = new window.Inventory();
      this.boot_sounds();
      this.startingScore = window.SCORE;
      window.CURRENT_GAME = window.MainGame;
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
      this.pauseButton.pos.x = this.screen.x + 20;
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
        this.dither = ig.game.spawnEntity(window.EntityDither, this.screen.x, this.screen.y);
        this.paused_graphic = ig.game.spawnEntity(window.EntityPaused, this.screen.x + 80, this.screen.y + 180);
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
  window.TransitionScreen = window.BaseScreen.extend({
    gravity: 0,
    get_quote: function() {
      return new window.Quotes().get_random_quote();
    },
    init: function() {
      this.quote = this.get_quote();
      this.gameTimer = new ig.Timer();
      this.logo = new ig.Image('media/logo.png');
      return this.guy = new ig.Image('media/guy.png');
    },
    draw: function() {
      this.parent();
      this.logo.draw(18, 50);
      this.guy.draw(100, 200, 0, 0, 32, 40);
      this.font.draw("x  " + window.LIVES, 165, 215, ig.Font.ALIGN.LEFT);
      return this.font.draw(this.quote, 160, 315, ig.Font.ALIGN.CENTER);
    },
    update: function() {
      this.parent();
      if (this.gameTimer.delta() > 2) {
        return ig.system.setGame(window.CURRENT_GAME);
      }
    }
  });
  window.DeathTransitionScreen = window.TransitionScreen.extend({
    get_quote: function() {
      return new window.Quotes().get_random_bad_quote();
    }
  });
  window.TutorialGame = window.MainGame.extend({
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
  ig.System.scaleMode = ig.System.SCALE.CRISP;
  ig.main('#canvas', window.StartScreen, 60, 320, 480, 1);
  ig.soundManager.volume = 0.4;
});
