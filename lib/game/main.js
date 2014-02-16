CURRENT_GAME = undefined
SCORE = 0
ig.module('game.main')
.requires(
    'impact.game', 
    'impact.font', 
    // 'plugins.layers', 
    'plugins.collision-map', 
    'game.entities.ui.logo', 
    'game.entities.ui.play', 
    'game.entities.ui.retry', 
    'game.entities.guy', 
    'game.levels.firstLevel',
    'game.levels.title'
).defines(function() {
    BaseScreen = ig.Game.extend({
        font: new ig.Font('media/font.png'),
        gravity: 800,
        draw: function() {
            this.parent();
            if (this.guy){
                this.screen.x += 2;
            }
        }
    });

    StartScreen = BaseScreen.extend({
        init: function() {
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
            this.logo.pos.y = Math.sin((this.logo.pos.x / 50) * 8) + 75;
            this.play.pos.x = this.guy.pos.x - 25;
            if (this.guy){
                this.screen.x = this.guy.pos.x - 100;
            }
            this.parent();
            this.font.draw('00000', 300, 10, ig.Font.ALIGN.RIGHT);
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
            this.screen.x = guy_x - 100;
        },
        update: function() {
            this.parent();
            if (this.deathCondition()){
                this.killGuy();
            }
        },
        draw: function () {
            this.parent();
            this.font.draw(SCORE.toString(), 300, 10, ig.Font.ALIGN.RIGHT);
        },
        deathCondition: function() {
            return this.guy && ((this.guy.pos.y > this.screen.y + 480) || (this.screen.x > this.guy.pos.x + 40))
        },
        killGuy: function () {
            ig.game.spawnEntity(EntityRetry, this.screen.x + 24, 74);
            this.guy.kill();
            delete this.guy;
        }
    });

    // ig.System.scaleMode = ig.System.SCALE.CRISP;
    ig.main('#canvas', StartScreen, 60, 320, 480, 1);
});
