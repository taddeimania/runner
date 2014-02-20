ig.module('game.entities.ui.pause')
.requires(
    'game.entities.ui.baseUIButton'
).defines(function() {
    EntityPause = EntityBaseUIButton.extend({
        animSheet: new ig.AnimationSheet('media/pause.png', 33, 33),
        size: {
            x: 50,
            y: 47
        },
        clickHandler: function() {
            started = ig.game.getEntitiesByType('EntityStartTrigger')[0];
            ig.game.tracking = ig.game.tracking == false ? true : false;
            // I hate this code and it's hacky and i wish everyone would die.
            if (started.activated){
                ig.game.tracking = false;
            }
            ig.game.pause();
        }
    });
});
