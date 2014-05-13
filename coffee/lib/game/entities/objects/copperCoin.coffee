ig.module('game.entities.objects.silverCoin')
.requires(
  'game.entities.objects.baseCoin'
).defines ->
  window.EntityCopperCoin = EntityBaseCoin.extend
    value: 1
    color: "copper"
