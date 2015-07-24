ig.module('game.screens.deathTransitionScreen')
.requires(
  'game.quotes'
  'game.screens.transitionScreen'
).defines ->

  window.DeathTransitionScreen = window.TransitionScreen.extend
    get_quote: ->
      new window.Quotes().get_random_bad_quote()

