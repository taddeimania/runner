ig.module('game.entities.objects.copperCoin')
.requires(
  'game.entities.objects.baseCoin'
).defines ->
  window.EntityCopperCoin = EntityBaseCoin.extend
    value: 1
    color: "copper"
