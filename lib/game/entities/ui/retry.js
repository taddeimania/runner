ig.module('game.entities.ui.retry')
.requires(
    'impact.entity'
).defines(function() {
    EntityRetry = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/retry.png', 137, 13),
        size: {
            x: 167,
            y: 33
        },
        offset: {
            x: -15,
            y: -10
        },
        gravityFactor: 0,
        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('normal', 1, [0]);
            this.currentAnim = this.anims.normal;
        },
        update: function() {
            if (this.clicked()){
                // reset score to what it was at level start?
                SCORE = ig.game.startingScore;
                ig.system.setGame(CURRENT_GAME);
            }
            this.parent();
        },
        clicked: function (){
            return ig.input.pressed('jump') && 
                (ig.input.mouse.y > this.pos.y && ig.input.mouse.y < this.pos.y + this.size.y) && 
                (ig.input.mouse.x + ig.game.screen.x > this.pos.x && ig.input.mouse.x + ig.game.screen.x < this.pos.x + this.size.x);
        }
    });
});
