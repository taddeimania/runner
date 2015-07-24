window.VERSION = '0.08.1';

window.CURRENT_GAME = void 0;

window.CURRENT_LEVEL = void 0;

window.SCORE = 0;

window.LIVES = 0;

ig.module('game.main').requires('impact.game', 'impact.font', 'impact.sound', 'plugins.collision-map', 'plugins.tween', 'game.quotes', 'game.entities.ui.logo', 'game.entities.ui.dither', 'game.entities.ui.play', 'game.entities.ui.retry', 'game.entities.ui.pause', 'game.entities.ui.paused', 'game.entities.ui.quit', 'game.entities.guy', 'game.inventory.inventory', 'game.levels.tutorialLevel', 'game.levels.firstLevel', 'game.levels.secondLevel', 'game.levels.thirdLevel', 'game.levels.fourthLevel', 'game.levels.fifthLevel', 'game.levels.sixthLevel', 'game.levels.title', 'game.screens.baseScreen', 'game.screens.deathTransitionScreen', 'game.screens.mainScreen', 'game.screens.startScreen', 'game.screens.transitionScreen', 'game.screens.tutorialScreen').defines(function() {
  ig.System.scaleMode = ig.System.SCALE.CRISP;
  ig.main('#canvas', window.StartScreen, 60, 320, 480, 1);
  ig.soundManager.volume = 0.2;
});
