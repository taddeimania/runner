ig.module('game.entities.ui.border')
.requires(
    'impact.entity'
).defines(function() {
    EntityBorder = ig.Entity.extend({
        animSheet: new ig.AnimationSheet('media/uitopborder.png', 320, 107),
        size: {
            x: 320,
            y: 107
        },
        gravityFactor: 0,
        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('normal', 1, [0]);
            this.currentAnim = this.anims.normal;
        }
    });
});
