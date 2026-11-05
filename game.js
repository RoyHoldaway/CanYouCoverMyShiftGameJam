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

    //Testing all buttons will print to console when pressed and not conflict with browser shortcuts
    //console input for space key
    this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    //console input for Enter key
    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);


    //console input for Numpad Enter key
    this.NumpadEnterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.NUMPAD_ENTER);

    //console input for Caps Lock key
    this.CapsLockKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.CAPS_LOCK);


    //console input for CTRL left and right individually
    this.input.keyboard.on('keydown', (event) => {
      if (event.code === 'ControlLeft') {
        console.log('ctrl left pressed');
      }
      if (event.code === 'ControlRight') {
        console.log('ctrl right pressed');
      }
    });


    //console input for shift left and right individually
    this.input.keyboard.on('keydown', (event) => {
      if (event.code === 'ShiftLeft') {
        console.log('Shift left pressed');
      }
      if (event.code === 'ShiftRight') {
        console.log('Shift right pressed');
      }
    });
  }



  update(time, delta) {
    // runs every frame

        if (this.NumpadEnterKey.isDown) {
      console.log('numpad enter key pressed');
    }

    if (this.enterKey.isDown) {
      console.log('enter key pressed');
    }

    if (this.spaceKey.isDown) {
      console.log('space key pressed');
    }

    if (this.CapsLockKey.isDown) {
      console.log('caps lock key pressed');
    }
  }
}

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  parent: 'game',
  backgroundColor: '#2d6a8f',
  scene: [ShiftScene],
};



new Phaser.Game(config);

