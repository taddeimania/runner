ig.module('game.screens.deathTransitionScreen').requires('game.quotes', 'game.screens.transitionScreen').defines(function() {
  return window.DeathTransitionScreen = window.TransitionScreen.extend({
    get_quote: function() {
      return new window.Quotes().get_random_bad_quote();
    }
  });
});
