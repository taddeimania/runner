ig.module('game.main')
.requires(
    'impact.game', 
    'plugins.layers', 
    'plugins.collision-map', 
    'game.entities.ui.logo', 
    'game.entities.ui.play', 
    'game.entities.guy', 
    'game.levels.firstLevel',
    'game.levels.title'
).defines(function() {
    BaseScreen = ig.Game.extend({
        gravity: 800,
        draw: function() {
            this.parent();
            if (this.guy){
                this.screen.x += 2.5;
            }
        }
    });

    StartScreen = BaseScreen.extend({
        init: function() {
            this.parent();
            ig.input.bind(ig.KEY.MOUSE1, 'click');
            logo = ig.game.spawnEntity(EntityLogo, 24, 74),
            play = ig.game.spawnEntity(EntityPlay, 24, 154),
            this.createLayer('gui');
            this.addItem({
                _layer: 'gui',
                update: function () {
                    camera_x = ig.game.screen.x + 18;
                    logo.pos.x = camera_x;
                    logo.pos.y = Math.sin((logo.pos.x / 50) * 8) + 75;
                    play.pos.x = camera_x + 75;

                    if (play.clicked()){
                        ig.input.unbind(ig.KEY.MOUSE1);
                        ig.system.setGame(MainGame);
                    }
                },
                draw: function (){
                    logo.draw();
                    play.draw();
                }
            })
            this.loadLevel(LevelTitle);
            var guy, guy_x;
            this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
            guy_x = this.guy.pos.x;
            this.screen.x = guy_x - 100;
        }
    });

    MainGame = BaseScreen.extend({
        init: function () {
            this.parent();
            ig.input.bind(ig.KEY.MOUSE1, 'jump');
            this.loadLevel(LevelFirstLevel);
            var guy, guy_x;
            this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
            guy_x = this.guy.pos.x;
            this.screen.x = guy_x - 100;
        },
        update: function() {
            if (this.deathCondition()){
                console.log('here')
                this.killGuy();
            }
            this.parent();
        },
        deathCondition: function() {
            return this.guy && ((this.guy.pos.y > this.screen.y + 480) || (this.screen.x > this.guy.pos.x + 40))
        },
        killGuy: function () {
            this.guy.kill();
            delete this.guy;
        }
    });

    ig.main('#canvas', StartScreen, 60, 320, 480, 1);
});
