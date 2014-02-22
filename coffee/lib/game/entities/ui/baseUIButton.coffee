ig.module('game.entities.ui.baseUIButton')
.requires(
  'impact.entity'
).defines ->
  lr.EntityBaseUIButton = ig.Entity.extend
    gravityFactor: 0
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim('normal', 1, [0])
      @currentAnim = @anims.normal

    update: ->
      if @clicked()
        @clickHandler()

      @parent()

    clicked: ->
      ig.input.pressed('jump') and
        (ig.input.mouse.y > @pos.y and ig.input.mouse.y < @pos.y + @size.y) and
        (ig.input.mouse.x + ig.game.screen.x > @pos.x and ig.input.mouse.x + ig.game.screen.x < @pos.x + @size.x)
