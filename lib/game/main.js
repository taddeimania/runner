ig.module('game.main')
.requires(
    'impact.game', 
    'plugins.layers', 
    'plugins.collision-map', 
    'game.entities.logo', 
    'game.entities.guy', 
    'game.levels.title'
).defines(function() {
    RunnerGame = ig.Game.extend({
        gravity: 800,
        init: function() {
            this.parent();
            ig.input.bind(ig.KEY.MOUSE1, 'jump');
            logo = ig.game.spawnEntity(EntityLogo, 24, 74),
            this.createLayer('gui');
            this.addItem({
                _layer: 'gui',
                update: function () {
                },
                draw: function (){
                    logo.pos.x = ig.game.screen.x + 18;
                    logo.pos.y = Math.sin((logo.pos.x / 50) * 8) + 75;
                    logo.draw();
                }
            })
            this.loadLevel(LevelTitle);
            var guy, guy_x;
            this.guy = ig.game.getEntitiesByType('EntityGuy')[0];
            guy_x = this.guy.pos.x;
            this.screen.x = guy_x - 100;
        },
        update: function() {
            if (this.deathCondition()){
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
        },
        draw: function() {
            if (this.guy){
                this.screen.x += 2.5;
            }
            this.parent();
        }
    });
    ig.main('#canvas', RunnerGame, 60, 320, 480, 1);
});
