ig.module('game.entities.guy')
.requires(
    'impact.entity'
).defines(function() {
    EntityGuy = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/guy.png', 32, 40),
    size: {
        x: 32,
        y: 40
    },
    init: function(x, y, settings) {
        this.vel.x = 100;
        this.parent(x, y, settings);
        this.addAnim('idle', 1, [0]);
        this.addAnim('walking', 0.1, [0, 1, 2]);
        return this.currentAnim = this.anims.idle;
    },
    draw: function() {
        if (this.vel.x > 0) {
            this.currentAnim = this.anims.walking;
        }
        return this.parent();
    }
    });
});
