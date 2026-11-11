class Fryer extends Phaser.Scene {
  constructor() {
    super('Fryer');
  }

    create() {
        //establish the fryer object to hold the fryer data and max out the basket value at 2
        this.fryer = {
            maxBaskets: 2,
            fryer1: {
                baskets: 0,
            },
            fryer2: {
                baskets: 0,
            }
        };

        this.basket = {
            submerged: false,
            empty: true,

        };
        
        // Create an object to hold the fryer data and max out the basket value at 2
        this.fryer1Data = {
            baskets: 0,
        };

        // Create an object to hold the fryer data and max out the basket value at 2
        this.fryer2Data = {
            baskets: 0,
        
            addBasket: function(value) {
                this.baskets ++;
                if (this.baskets === 0) {
                    console.log('Fryer 2 basket is empty');
                }
                if (this.baskets === 2) {
                    console.log('Fryer 2 is full of baskets');
                }
            }
        };



        this.basketData = {
            submerged: false,
            empty: true,
            fries: 0,
            onionRings: 0,
            chickenTenders: 0,
            cookTime: 0,
        };

    }
}

export default Fryer;