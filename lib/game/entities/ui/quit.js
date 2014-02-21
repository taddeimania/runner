ig.module('game.entities.ui.quit')
.requires(
    'game.entities.ui.baseUIButton'
).defines(function() {
    EntityQuit = EntityBaseUIButton.extend({
        animSheet: new ig.AnimationSheet('media/quit.png', 130, 40),
        size: {
            x: 130,
            y: 40
        },
        clickHandler: function() {
            SCORE = 0;
            CURRENT_LEVEL = undefined;
            ig.system.setGame(StartScreen);
        }
    });
});
