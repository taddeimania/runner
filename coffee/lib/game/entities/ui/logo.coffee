ig.module('game.entities.ui.logo')
.requires(
    'impact.entity'
).defines ->
  window.EntityLogo = ig.Entity.extend
    animSheet: new ig.AnimationSheet('media/logo.png', 286, 39),
    size:
      x: 286
      y: 39
    init: (x, y, settings) ->
      @parent x, y, settings
      @addAnim 'normal', 1, [0]
      @currentAnim = @anims.normal
  return
