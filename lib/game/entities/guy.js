ig.module('game.entities.guy').requires('game.system.eventChain', 'impact.entity').defines(function() {
  window.EntityGuy = ig.Entity.extend({
    animSheet: new ig.AnimationSheet('media/guy.png', 32, 40),
    inventory: [],
    size: {
      x: 26,
      y: 34
    },
    offset: {
      x: 3,
      y: 6
    },
    maxVel: {
      x: 1,
      y: 300
    },
    friction: {
      x: 200,
      y: 1
    },
    accelAir: 600,
    jump: 350,
    velocity: 123,
    type: ig.Entity.TYPE.A,
    checkAgainst: ig.Entity.TYPE.B,
    collides: ig.Entity.COLLIDES.ACTIVE,
    finished: false,
    init: function(x, y, settings) {
      this.parent(x, y, settings);
      this.vel.x = this.velocity;
      this.addAnim('walking', 0.1, [0, 1, 2]);
      this.addAnim('standing', 0.1, [0]);
      return this.currentAnim = this.anims.walking;
    },
    update: function() {
      if (this.finishEvent) {
        this.finishEvent();
      }
      if (this.vel.x < this.velocity) {
        this.vel.x = this.velocity;
      }
      this.checkVerticalMovement();
      return this.parent();
    },
    draw: function() {
      if (this.vel.x === 0) {
        this.currentAnim = this.anims.standing;
      } else {
        this.currentAnim = this.anims.walking;
      }
      return this.parent();
    },
    finish: function(nextLevel) {
      this.finished = true;
      return this.finishEvent = EventChain(this).wait(2).then(function() {
        ig.game.startingScore = window.SCORE;
        this.finished = false;
        window.CURRENT_LEVEL = ig.global[nextLevel];
        ig.game.loadLevel(window.CURRENT_LEVEL);
        ig.game.guy = ig.game.getEntitiesByType('EntityGuy')[0];
        ig.game.uiBG = new ig.Image('media/uitopborder.png');
        ig.game.screen.x = ig.game.guy.pos.x;
        ig.game.tracking = false;
        ig.game.pauseButtonGraphic = new ig.Image('media/pause.png');
        return ig.game.pauseButton = ig.game.spawnEntity(window.EntityPause, ig.game.guy.pos.x + 40, 65);
      });
    },
    checkVerticalMovement: function() {
      if (this.standing && ig.input.pressed('jump') && ig.input.mouse.y > 100) {
        ig.jumpSound.play();
        return this.vel.y = -this.jump;
      }
    }
  });
});
