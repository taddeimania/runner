ig.module('game.inventory.inventory')
.requires(
	'impact.impact'
  'impact.image'
).defines ->

  window.Inventory = ig.Class.extend
    storage: []
    init: ->
      console.log "woah111"
      @storage.append(new ig.Image('media/blueKey.png'))

    addItem: (item) ->
      serialized_item = new ig.Image item
      @storage.append(serialized_item)

    draw: ->
      for object in @storage
        object.draw(12, 23)
