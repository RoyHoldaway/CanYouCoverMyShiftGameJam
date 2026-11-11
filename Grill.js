class Grill extends Phaser.Scene {
  constructor() {
    super('Grill');
  }

    create() {
        this.grillData = {
            burgers: 0,



        };


        this.burgerData = {
            cookTime: 0,
        };

    }

}


export default Grill;