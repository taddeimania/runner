ig.module('game.entities.objects.copperCoin')
.requires(
  'game.entities.objects.baseCoin'
).defines ->
  window.EntitySilverCoin = EntityBaseCoin.extend
    value: 5
    color: "silver"
