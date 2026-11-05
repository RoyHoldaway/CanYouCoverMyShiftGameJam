//were making a game for a gamejam using phaser in js.
//its kind of like papas pizzaria and all those games
//
// Idea I wrote up
//
//Title
//Can you cover my shift?

//Plot:
//get called into work because someone needs you to cover their shift

//You get there and someone asks if you can take their closing shift too.
//so now youre going to be there all day.
//(Sets the reason why youre stuck here essentially forever in the game loop)

//First level is learning controls
//Arrow keys over to highlighted grill, select burger with mouse, flip burger with shift key
//arrow keys over to highlighted fryer, left shift to drop fries right shift to pick them up

//after a few different tasks the boss calls, his voice is fast paced 
//and high pitched. On the call he says 
//"Hey the IT guy should be there any minute"
//You say okay, and Boss speaks again 
//"He said when he gets there heres gonna take all the control keys, the caps lock key,  
//and the enter keys off of the keyboards"
//His voice gets slow paced and drops to a deep scary tone screen turns red
//"and hes gonna replace them with shifts"

//Now enter and control are also controls
//You now need to flip burgers, season fries, add condiments, toss salads, 

//If you dont clean the counter top the plate or food can slip off the table

//Coworker texts or the boss calls with increasingly unreasonable asks (“can you also do the drive-thru?” and 
//"I signed the kitchen up for delivery apps, youll need to make those to go orders too").

//Art style will be 2D minimalist vector cartoon style like scribblenauts
//


class ShiftScene extends Phaser.Scene {
  constructor() {
    super('ShiftScene');
  }

  preload() {
    // assets get loaded here later (images, sounds)
  }

  create() {
    // runs once when the scene starts
    console.log('scene is alive');

    this.player = this.physics.add.sprite(100, 100, 'player');
    this.playerSpeed = 200; // pixels per second

    this.cursors = this.input.keyboard.createCursorKeys();

    //Testing all buttons will print to console when pressed and not conflict with browser shortcuts
    this.bindings = {
      //Shift keys to flip burgers and pick up fries
      ShiftLeft: () => console.log('Shift left pressed'),
      ShiftRight: () => console.log('Shift right pressed'),

      //Control keys to season fries and add condiments
      ControlLeft: () => console.log('Control left pressed'),
      ControlRight: () => console.log('Control right pressed'),

      //Space to leave the station and go to the next one
      Space: () => console.log('Space key pressed'),

      //Enter to push orders to the next station
      Enter: () => console.log('Enter key pressed'),

      //Numpad Enter key to clean counter top
      NumpadEnter: () => console.log('Numpad enter key pressed'),

      //Caps Lock key to toss salads
      CapsLock: () => console.log('Caps lock key pressed'),
    };

    this.input.keyboard.on('keydown', (event) => {
      const binding = this.bindings[event.code];
      if (binding) {
        binding();
      }
    });


    //Controls are now set so I will move onto making something that can be interacted with

    //To start I will make a rectangle that can be moved by the arrow keys this will become the player

    //Then shift, control, enter and caps lock, will be used to interact with objects in the game world.

    //space will be used to "jump" for this stage of testing but then will be used to trigger going into the next station via scenes

    //numpad enter will be used to clean the counter top and will not be tested until later on

  }


  update(time, delta) {
    // runs every frame
    
    const player = this.player;
    const keys = this.input.keyboard.keys;
    //setting velocity based off arcade physics so that the player can move around the screen with arrow keys
    player.setVelocity(0);

    //setting controls for the player to move around the screen with arrow keys
    if (this.cursors.up.isDown) {
      player.setVelocityY(-this.playerSpeed);
    }
    if (this.cursors.down.isDown) {
      player.setVelocityY(this.playerSpeed);
    }
    if (this.cursors.left.isDown) {
      player.setVelocityX(-this.playerSpeed);
    }
    if (this.cursors.right.isDown) {
      player.setVelocityX(this.playerSpeed);
    }

    //Normalize player speed to stop diagonal movement from being faster than horizontal or vertical movement. 
    //This is like stopping 2d bunny hopping in fps games.
    player.body.velocity.normalize().scale(this.playerSpeed);
  }
}










const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  parent: 'game',
  backgroundColor: '#2d6a8f',

  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    },
  },

  scene: [ShiftScene],
};



new Phaser.Game(config);

