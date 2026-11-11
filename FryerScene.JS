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

export default FryerScene;