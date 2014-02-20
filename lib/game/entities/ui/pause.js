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
            ig.game.pause();
            ig.game.tracking = ig.game.tracking == false ? true : false;
        }
    });
});
