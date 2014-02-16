ig.module('game.entities.guy')
.requires(
    'impact.entity'
).defines(function() {
    EntityGuy = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/guy.png', 32, 40),
        size: {
            x: 26,
            y: 34
        },
        offset: {
            x: 3,
            y: 6
        },
        maxVel: {x: 175, y: 300},
        friction: {x: 1, y: 1},
        accelAir: 600,
        jump: 350,
        velocity: 120,
        type: ig.Entity.TYPE.A,
        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.vel.x = this.velocity;
            this.addAnim('idle', 1, [0]);
            this.addAnim('walking', 0.1, [0, 1, 2]);
            return this.currentAnim = this.anims.idle;
        },
        update: function (){
            this.vel.x = this.velocity;
            if (this.vel.x < this.velocity){
                this.vel.x = this.velocity;
            }
            this.checkVerticalMovement(); 
            this.parent();
        },
        draw: function() {
            if (this.vel.x > 0) {
                this.currentAnim = this.anims.walking;
            }
            return this.parent();
        },
        checkVerticalMovement: function () {
            if (this.standing && ig.input.pressed('jump')){
                this.vel.y = -this.jump;
            }
        }
    });
});
