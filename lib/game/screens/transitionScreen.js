ig.module('game.screens.transitionScreen').requires('impact.game', 'impact.font', 'game.quotes', 'game.screens.baseScreen').defines(function() {
  return window.TransitionScreen = window.BaseScreen.extend({
    gravity: 0,
    get_quote: function() {
      return new window.Quotes().get_random_quote();
    },
    init: function() {
      this.quote = this.get_quote();
      this.gameTimer = new ig.Timer();
      this.logo = new ig.Image('media/logo.png');
      return this.guy = new ig.Image('media/guy.png');
    },
    draw: function() {
      this.parent();
      this.logo.draw(18, 50);
      this.guy.draw(100, 200, 0, 0, 32, 40);
      this.font.draw("x  " + window.LIVES, 165, 215, ig.Font.ALIGN.LEFT);
      return this.font.draw(this.quote, 160, 315, ig.Font.ALIGN.CENTER);
    },
    update: function() {
      this.parent();
      if (this.gameTimer.delta() > 2) {
        return ig.system.setGame(window.CURRENT_GAME);
      }
    }
  });
});
