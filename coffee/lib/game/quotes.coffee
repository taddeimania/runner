ig.module('game.quotes')
.requires(
).defines ->

  window.Quotes = ig.Class.extend
    badQuotes: [
      #|                |\n|                |\n|               |\n
      '"This may seem random\nbut you would be\nmistaken."'
      '"Please direct all\nfrustration towards\n@taddeimania."'
      '"Messages may be\nunnecessarily long\nfor time given\nto read.\n\n\nwhy are you\nreading this"'
      '"It might be time\nto take a break."'
      '"I really tried\nto make the\ncontrols super easy."'
      '"Thank the stars\nthis game was free."'
      '"WHAT THE!!"'
      '"You totally\ngot robbed."'
      '"Nobody ever makes\nit over that\nobstacle.\n\nDon\'t feel bad."'
      '"Thank @mechlo for\nthis awesome music."'
      '"Don\'t worry\nI know you meant\nto jump."'
    
    ]
    goodQuotes: [
      '"Great Job!"'
    ]
    get_random_bad_quote: ->
      @badQuotes[Math.floor(Math.random()*@badQuotes.length)]
    get_random_quote: ->
      @goodQuotes[Math.floor(Math.random()*@goodQuotes.length)]
