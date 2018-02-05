// Enemies our player must avoid
'use strict';

function getRandomInt(max, min) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Character {
  constructor(ex, why, speed) {
    this.x = ex;
    this.y = why;
  }
}

class Enemy extends Character{
  constructor(ex, why, speed) {
    super(ex, why, speed)
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  }
  update(dt) {
    this.x += this.speed * dt
    if (this.x > 515) {
      this.x = -125;
      this.speed = getRandomInt(600, 150)
    }
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

let buggy1 = new Enemy(88, 220, getRandomInt(600, 150));
let buggy2 = new Enemy(88, 137, getRandomInt(600, 150));
let buggy3 = new Enemy(88, 54, getRandomInt(600, 150));


class Player extends Character{
  constructor() {
    super();
    this.sprite = 'images/char-boy.png';
    this.x = 202;
    this.y = 386;
  }
  update() {
    for (let n = 0; n < 3; n++){
      if (Math.abs(player.x - allEnemies[n].x) <= 81 && (player.y === allEnemies[n].y)) {
        this.x = 202;
        this.y = 386;
      }
    }
  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(arrowKeys) {
    switch(arrowKeys){
      case 'left':
      this.x -= 101
      if (this.x < 0) {
        this.x = 0;
      }
      break;
      case 'up':
      this.y -= 83
      if (this.y < -15) {
        this.y = 386;
        this.x = 202;
      }
      break;
      case 'right':
      this.x += 101
      if (this.x > 404) {
        this.x = 404;
      }
      break;
      case 'down':
      this.y += 83
      if (this.y > 400) {
        this.y = 386;
      }
      break;
    }
  }
}

let player = new Player() ;

let allEnemies = [buggy1, buggy2, buggy3];


document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
