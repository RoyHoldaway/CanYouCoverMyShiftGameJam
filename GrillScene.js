
//Havent started on grill art yet but this will be the scene for the grill station.
// It will have a background of a grill and a burger you watch heat up.
// The player will be able to flip burgers and serve it.
// The player will also be able to leave the station and go to the next one.

class GrillScene extends Phaser.Scene {
  constructor() {
    super('GrillScene');
  }

  preload() {
    this.spritePath = 'assets/sprites/';

    this.load.on('loaderror', (file) => {
        console.error('ASSET FAILED:', file.key, file.src);
    });

    //load images of the fryer basket and background for the fryer scene.
    this.load.image('GrillBackground', this.spritePath + 'GrillBackground.png');

    //load image of the meat that will be used in the grill scene.
    this.load.image('BurgerRaw', this.spritePath + 'BurgerRaw.png');
    this.load.image('BurgerRare', this.spritePath + 'BurgerRare.png');
    this.load.image('BurgerMedium', this.spritePath + 'BurgerMedium.png');
    this.load.image('BurgerWell', this.spritePath + 'BurgerWell.png');
    this.load.image('BurgerBurnt', this.spritePath + 'BurgerBurnt.png');
  }

  create() {
    // runs once when the scene starts
    console.log('scene is alive');
    
    this.background = this.physics.add.image(960, 540, 'GrillBackground');
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

export default GrillScene;