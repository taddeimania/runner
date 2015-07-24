ig.module('game.screens.baseScreen')
.requires(
  'impact.game'
  'impact.font'
).defines ->

  window.BaseScreen = ig.Game.extend
    font: new ig.Font 'media/font.png'
    gravity: 800
    draw: ->
      @parent()
      if (@guy and !@guy.finished and @tracking)
        @screen.x += 2

