VERSION = '0.02'
CURRENT_GAME = undefined
SCORE = 0
ig.module('game.main')
.requires(
    'impact.game', 
    'impact.font', 
    'impact.sound', 
    'plugins.collision-map', 
    'plugins.tween', 
    'game.entities.ui.logo', 
    'game.entities.ui.border', 
    'game.entities.ui.play', 
    'game.entities.ui.retry', 
    'game.entities.ui.pause', 
    'game.entities.ui.quit', 
    'game.entities.guy', 
    'game.levels.firstLevel',
    'game.levels.title'
).defines(function() {
    BaseScreen = ig.Game.extend({
        font: new ig.Font('media/font.png'),
        gravity: 800,
        draw: function() {
            this.parent();
            if (this.guy && !this.guy.finished && this.tracking){
                this.screen.x += 2;
            }
        }
    });

    StartScreen = BaseScreen.extend({
        init: function() {
            // ig.music.add('media/music/theme.ogg');
            // ig.music.volume = 0.1;
            // ig.music.play();
            this.logo = ig.game.spawnEntity(EntityLogo, 24, 74)
            this.play = ig.game.spawnEntity(EntityPlay, 24, 154)
            ig.input.bind(ig.KEY.MOUSE1, 'click');
            this.loadLevel(LevelTitle);
            var guy, guy_x;
            this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
            guy_x = this.guy.pos.x;
            this.screen.x = guy_x - 100;
        },
        update: function() {
            this.parent();
            if (this.play.clicked()){
                ig.input.unbind(ig.KEY.MOUSE1);
                ig.system.setGame(MainGame);
            }
        },
        draw: function() {
            camera_x = ig.game.screen.x + 18;
            this.logo.pos.x = this.guy.pos.x - 81;
            this.logo.pos.y = Math.sin((this.logo.pos.x / 50) * 8) + 90;
            this.play.pos.x = this.guy.pos.x - 25;
            if (this.guy){
                this.screen.x = this.guy.pos.x - 100;
            }
            this.parent();
            this.font.draw(VERSION, 25, 65, ig.Font.ALIGN.LEFT);
            this.font.draw('00000', 300, 65, ig.Font.ALIGN.RIGHT);
            this.logo.draw();
            this.play.draw();
        }
    });

    MainGame = BaseScreen.extend({
        init: function () {
            this.startingScore = SCORE
            CURRENT_GAME = MainGame;
            ig.input.bind(ig.KEY.MOUSE1, 'jump');
            this.loadLevel(LevelFirstLevel);
            var guy, guy_x;
            this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
            guy_x = this.guy.pos.x;
            this.screen.x = guy_x;
            this.uiBG = ig.game.spawnEntity(EntityBorder, 143, 0);
            this.pauseButton = ig.game.spawnEntity(EntityPause, guy_x + 40, 65);
        },
        update: function() {
            this.parent();
            if (this.deathCondition()){
                this.pauseButton.kill();
                this.killGuy();
            }
            this.pauseButton.pos.x = this.screen.x + 40;
            this.uiBG.pos.x = this.screen.x;
        },
        draw: function () {
            this.parent();
            if (this.retryTween || this.quitTween){
                this.retryTween.draw();
                this.quitTween.draw();
            }
            this.font.draw(SCORE.toString(), 300, 65, ig.Font.ALIGN.RIGHT);
        },
        deathCondition: function() {
            return this.guy && ((this.guy.pos.y > this.screen.y + 480) || (this.screen.x > this.guy.pos.x + 40))
        },
        pause: function() {
          ig.Timer.timeScale = (ig.Timer.timeScale == 0 ? 1 : 0);
          this._paused = ig.Timer.timeScale == 0;
        },
        killGuy: function () {
            retry = ig.game.spawnEntity(EntityRetry, this.screen.x - 400, 180);
            retry.tween({pos: {x: this.screen.x + 80, y: 180}}, 0.25).start()
            quit = ig.game.spawnEntity(EntityQuit, this.screen.x + 400, 260);
            quit.tween({pos: {x: this.screen.x + 95, y: 260}}, 0.25).start()
            this.guy.kill();
            delete this.guy;
        }
    });

    ig.System.scaleMode = ig.System.SCALE.CRISP; 
    ig.main('#canvas', StartScreen, 60, 320, 480, 1);
});
