class KitchenScene extends Phaser.Scene {
  constructor() {
    super('KitchenScene');
  }

  preload() {
    this.ZoeSpritePath = 'assets/sprites/ZoeSprites/';
    this.BackgroundSpritePath = 'assets/sprites/backgrounds/';

    this.load.on('loaderror', (file) => {
        console.error('ASSET FAILED:', file.key, file.src);
    });
    // assets get loaded here later (images, sounds)
    this.load.image('ZoeForward', this.ZoeSpritePath + 'ZoeForward.png');
    this.load.image('ZoeForwardRight', this.ZoeSpritePath + 'ZoeForwardRight.png');
    this.load.image('ZoeForwardLeft', this.ZoeSpritePath + 'ZoeForwardLeft.png');
    this.load.image('ZoeBackward', this.ZoeSpritePath + 'ZoeBackward.png');
    this.load.image('ZoeBackLeft', this.ZoeSpritePath + 'ZoeBackLeft.png');
    this.load.image('ZoeBackRight', this.ZoeSpritePath + 'ZoeBackRight.png');
    this.load.image('ZoeLeft', this.ZoeSpritePath + 'ZoeLeft.png');
    this.load.image('ZoeRight', this.ZoeSpritePath + 'ZoeRight.png');
    this.load.image('background', this.BackgroundSpritePath + 'background.png');
  }

  create() {
    // runs once when the scene starts
    console.log('scene is alive');
    
    this.background = this.physics.add.image(960, 540, 'background');
    this.player = this.physics.add.sprite(1300, 300, 'ZoeForward');
    this.player.setScale(0.15);
    this.playerSpeed = 325; // pixels per second

    this.cursors = this.input.keyboard.createCursorKeys();

    //Testing all buttons will print to console when pressed and not conflict with browser shortcuts
    this.bindings = {

      //Space to leave the station and go to the next one
      Space: () => console.log('Enter Scene'),


      //cut out all other controls as they will not be needed for now in the game. 
      //the use of the spacebar will let us to in and out of the other scenes.
      //shift, control, etc will all be used inside the other scenes.
      //some controls and other functions can be found in the scratch paper file I made. 
      // use this for holding information and ideas for the game.
    };

    this.input.keyboard.on('keydown', (event) => {
      const binding = this.bindings[event.code];
      if (binding) {
        binding();
      }
    });
  }


  update(time, delta) {
    // runs every frame
    
    //Establish constants for the update function to use for player movement
    const player = this.player;
    const keys = this.input.keyboard.keys;

    //setting velocity based off arcade physics so that the player can move around the screen with arrow keys
    player.setVelocity(0);

    //setting controls for the player to move around the screen with arrow keys

    // up arrow shows player backwards
    if (this.cursors.up.isDown) {
      player.setVelocityY(-this.playerSpeed);
      this.player.setTexture('ZoeBackward');
    }

    // down arrow shows player forwards
    if (this.cursors.down.isDown) {
      player.setVelocityY(this.playerSpeed);
      this.player.setTexture('ZoeForward');
    }

    // left and right arrows show player left and right
    if (this.cursors.left.isDown) {
      player.setVelocityX(-this.playerSpeed);
      this.player.setTexture('ZoeLeft');
    }
    if (this.cursors.right.isDown) {
      player.setVelocityX(this.playerSpeed);
      this.player.setTexture('ZoeRight');
    }

    
    //down and left for forward left
    if (this.cursors.down.isDown && this.cursors.left.isDown) {
      this.player.setTexture('ZoeForwardLeft');
    }

    //down right for forward right
    if (this.cursors.down.isDown && this.cursors.right.isDown) {
      this.player.setTexture('ZoeForwardRight');
    }

    //up and left for forward left
    if (this.cursors.up.isDown && this.cursors.left.isDown) {
      this.player.setTexture('ZoeBackLeft');
    }

    //up and right for forward right
    if (this.cursors.up.isDown && this.cursors.right.isDown) {
      this.player.setTexture('ZoeBackRight');
    }

    //Normalize player speed to stop diagonal movement from being faster than horizontal or vertical movement. 
    //This is like stopping 2d bunny hopping in fps games.
    player.body.velocity.normalize().scale(this.playerSpeed);
  }
}



class FryerScene extends Phaser.Scene {
  constructor() {
    super('FryerScene');
  }

  preload() {
    this.spritePath = 'assets/sprites/';

    this.load.on('loaderror', (file) => {
        console.error('ASSET FAILED:', file.key, file.src);
    });

    //load images of the fryer basket and background for the fryer scene.
    this.load.image('FryerBasket', this.spritePath + 'FryerBasket.png');
    this.load.image('FryerBackground', this.spritePath + 'FryerBackground.png');

    //load images of the food that will be used in the fryer scene.
    this.load.image('Fries', this.spritePath + 'Fries.png');
    this.load.image('OnionRings', this.spritePath + 'OnionRings.png');
    this.load.image('ChickenTenders', this.spritePath + 'ChickenTenders.png');

    //load images of the food that will be falling down the screen in the fryer scene.
    this.load.image('FallingFries', this.spritePath + 'FallingFries.png');
    this.load.image('FallingOnionRings', this.spritePath + 'FallingOnionRings.png');
    this.load.image('FallingChickenTender1', this.spritePath + 'FallingChickenTender1.png');
    this.load.image('FallingChickenTender2', this.spritePath + 'FallingChickenTender2.png');
    this.load.image('FallingChickenTender3', this.spritePath + 'FallingChickenTender3.png');
    this.load.image('FallingChickenTender4', this.spritePath + 'FallingChickenTender4.png');

  }

  create() {
    // runs once when the scene starts
    console.log('scene is alive');
    
    this.background = this.physics.add.image(960, 540, 'FryerBackground');
    this.cursors = this.input.keyboard.createCursorKeys();

    //Testing all buttons will print to console when pressed and not conflict with browser shortcuts
    this.bindings = {

      //Space to leave the station and go to the next one
      Space: () => console.log('Exit Scene'),

      //Shift keys to flip burgers and pick up fries
      ShiftLeft: () => console.log('Shift left pressed'),
      ShiftRight: () => console.log('Shift right pressed'),
    };

    this.input.keyboard.on('keydown', (event) => {
      const binding = this.bindings[event.code];
      if (binding) {
        binding();
      }
    });
  }


  update(time, delta) {
    // runs every frame
    

    //Establish constants for the update function to use for player movement
    const keys = this.input.keyboard.keys;

    // up arrow shows player backwards
    if (ShiftLeft.isDown) {
      this.player.setTexture('ZoeBackward');
    }

  }
}



const config = {
  type: Phaser.AUTO,
  width: 1920,
  height: 1080,
  parent: 'game',
  backgroundColor: '#2d6a8f',

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  scene: [KitchenScene],
};

new Phaser.Game(config);