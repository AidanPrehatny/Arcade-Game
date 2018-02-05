// Enemies our player must avoid
"use strict";

function getRandomInt(max, min) {  //ramdom number generator, used for the speed of each bug on respawn
  return Math.floor(Math.random() * (max - min)) + min;
}

class Character {  // Defines the X and Y coordinate values of anything of character class
  constructor(ex, why, speed) {
    this.x = ex;
    this.y = why;
  }
}

class Enemy extends Character{  // the class enemy is created to represent the bugs
  constructor(ex, why, speed) {
    super(ex, why, speed); // fetches the parameters for this class when instantiating enemy class for bug coordinates
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
  }
  update(dt) { // calculations happening every frame before the game renders that frame for each enemy
    this.x += this.speed * dt;
    if (this.x > 515) {
      this.x = -125;
      this.speed = getRandomInt(600, 150);
    }
  }
  render() { //renders bug on that frame
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// the three bugs
let buggy1 = new Enemy(88, 220, getRandomInt(600, 150));
let buggy2 = new Enemy(88, 137, getRandomInt(600, 150));
let buggy3 = new Enemy(88, 54, getRandomInt(600, 150));


class Player extends Character{ // the player's class, inheriting x and y properties from character
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
  handleInput(arrowKeys) {  // defines what happens when the event listener has arrow keys, which direction and if at the edge of the board what to do
    switch(arrowKeys){
      case 'left':
      this.x -= 101;
      if (this.x < 0) {
        this.x = 0;
      }
      break;
      case 'up':
      this.y -= 83;
      if (this.y < -15) {
        this.y = 386;
        this.x = 202;
      }
      break;
      case 'right':
      this.x += 101;
      if (this.x > 404) {
        this.x = 404;
      }
      break;
      case 'down':
      this.y += 83;
      if (this.y > 400) {
        this.y = 386;
      }
      break;
    }
  }
}

let player = new Player() ; // the player class instance

let allEnemies = [buggy1, buggy2, buggy3]; // the array which handles the enemies


document.addEventListener('keyup', function(e) { // event listener to listen for when you click arrow keys
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
