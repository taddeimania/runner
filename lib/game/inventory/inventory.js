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
      var i, object, _i, _len, _ref, _results;
      _ref = this.storage;
      _results = [];
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        object = _ref[i];
        if (object.name === item) {
          this.storage.splice(i, 1);
          break;
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    },
    draw: function() {
      var object, offset, _i, _len, _ref, _results;
      offset = 0;
      _ref = this.storage;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        object = _ref[_i];
        object.item.draw(80, 65);
        _results.push(offset = offset + 32);
      }
      return _results;
    }
  });
});
