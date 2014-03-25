ig.module('game.entities.ui.play')
.requires(
  'impact.entity'
).defines ->
  window.EntityPlay = ig.Entity.extend
    animSheet: new ig.AnimationSheet 'media/play.png', 112, 35
    size:
      x: 112
      y: 35
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'normal', 1, [0]
      @currentAnim = @anims.normal

    clicked: ->
      ig.input.pressed('click') and
        (ig.input.mouse.y > @pos.y and ig.input.mouse.y < @pos.y + @size.y) and
        (ig.input.mouse.x + ig.game.screen.x > @pos.x and ig.input.mouse.x + ig.game.screen.x < @pos.x + @size.x);
  return
