ig.module('game.entities.objects.redButton')
.requires(
  'impact.entity',
  'game.entities.objects.baseButton'
).defines ->
  window.EntityRedButton = EntityBaseButton.extend
    animSheet: new ig.AnimationSheet 'media/redButton.png', 32, 32
