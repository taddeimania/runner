ig.module('game.inventory.inventory').requires('impact.impact', 'impact.image').defines(function() {
  return window.Inventory = ig.Class.extend({
    storage: [],
    init: function() {
      console.log("woah111");
      return this.storage.append(new ig.Image('media/blueKey.png'));
    },
    addItem: function(item) {
      var serialized_item;
      serialized_item = new ig.Image(item);
      return this.storage.append(serialized_item);
    },
    draw: function() {
      var object, _i, _len, _ref, _results;
      _ref = this.storage;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        object = _ref[_i];
        _results.push(object.draw(12, 23));
      }
      return _results;
    }
  });
});
