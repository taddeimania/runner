ig.module('game.screens.transitionScreen')
.requires(
  'impact.game'
  'impact.font'
  'game.quotes'
  'game.screens.baseScreen'
).defines ->

  window.TransitionScreen = window.BaseScreen.extend
    gravity: 0
    get_quote: ->
      new window.Quotes().get_random_quote()

    init: ->
      @quote = @get_quote()
      @gameTimer = new ig.Timer()
      @logo = new ig.Image('media/logo.png')
      @guy = new ig.Image('media/guy.png')

    draw: ->
      @parent()
      @logo.draw(18, 50)
      @guy.draw(100, 200, 0, 0, 32, 40)
      @font.draw "x  #{window.LIVES}", 165, 215, ig.Font.ALIGN.LEFT
      @font.draw @quote, 160, 315, ig.Font.ALIGN.CENTER

    update: ->
      @parent()
      if @gameTimer.delta() > 2
        ig.system.setGame window.CURRENT_GAME


