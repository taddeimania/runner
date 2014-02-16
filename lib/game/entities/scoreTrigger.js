ig.module('game.entities.scoreTrigger')
.requires(
    'impact.entity'
).defines(function() {
    EntityScoreTrigger = ig.Entity.extend({
        size: {
            x: 10,
            y: 100
        },
        checkAgainst: ig.Entity.TYPE.BOTH,
        _wmDrawBox: true,
        _wmBoxColor: 'rgba(196, 255, 0, 0.7)',
        activated: true,
        check: function( other ) {
            if (this.activated){
                SCORE += 1;
                this.activated = false;
            }
        }
    });
});
