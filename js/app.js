// Enemies our player must avoid

let bugMovement = [60, 140, 220]

var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = 88;
    this.y = 220;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x++
    if (this.x === 515) {
      this.x = -125;
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

let buggy1 = new Enemy();



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Player {
  constructor() {
    this.sprite = 'images/char-boy.png';
    this.x = 88;
    this.y = 220;
  }
  update() {

  }
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput() {}
}

let player = new Player() ;

function start(xCord, yCord) {
player.x = xCord;
player.y = yCord;
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

let allEnemies = [buggy1];

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
