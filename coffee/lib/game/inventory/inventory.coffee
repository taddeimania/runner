ig.module('game.inventory.inventory')
.requires(
	'impact.impact'
  'impact.image'
).defines ->

  window.Inventory = ig.Class.extend
    storage: []

    addItem: (item) ->
      serialized_item = new ig.Image "media/#{item}.png"
      @storage.push({name: item, item: serialized_item})

    removeItem: (item) ->
      for object, i in @storage
        if object.name == item
          @storage.splice(i, 1)
          break

    draw: ->
      offset = 0
      for object in @storage
        object.item.draw(80, 35)
        offset = offset + 32
