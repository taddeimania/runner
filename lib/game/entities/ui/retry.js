ig.module('game.entities.ui.retry')
.requires(
    'game.entities.ui.baseUIButton'
).defines(function() {
    EntityRetry = EntityBaseUIButton.extend({
        animSheet: new ig.AnimationSheet('media/retry.png', 167, 37),
        size: {
            x: 167,
            y: 37
        },
        clickHandler: function() {
            SCORE = ig.game.startingScore;
            ig.system.setGame(CURRENT_GAME);
        }
    });
});
