ig.module('game.entities.objects.silverCoin')
.requires(
  'game.entities.objects.baseCoin'
).defines ->
  window.EntitySilverCoin = EntityBaseCoin.extend
    value: 5
    color: "silver"
