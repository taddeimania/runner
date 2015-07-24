ig.module('game.inventory.inventory').requires('impact.impact', 'impact.image').defines(function() {
  return window.Inventory = ig.Class.extend({
    storage: [],
    addItem: function(item) {
      var serialized_item;
      serialized_item = new ig.Image("media/" + item + ".png");
      return this.storage.push({
        name: item,
        item: serialized_item
      });
    },
    removeItem: function(item) {
      var i, j, len, object, ref, results;
      ref = this.storage;
      results = [];
      for (i = j = 0, len = ref.length; j < len; i = ++j) {
        object = ref[i];
        if (object.name === item) {
          this.storage.splice(i, 1);
          break;
        } else {
          results.push(void 0);
        }
      }
      return results;
    },
    draw: function() {
      var j, len, object, offset, ref, results;
      offset = 0;
      ref = this.storage;
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        object = ref[j];
        object.item.draw(80, 35);
        results.push(offset = offset + 32);
      }
      return results;
    }
  });
});
