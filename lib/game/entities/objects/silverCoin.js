ig.module('game.entities.objects.silverCoin').requires('game.entities.objects.baseCoin').defines(function() {
  return window.EntitySilverCoin = EntityBaseCoin.extend({
    value: 5,
    color: "silver"
  });
});
