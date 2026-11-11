class GameState extends Phaser.Scene {
  constructor() {
    super('GameState');
  }

    create() {
        //Create the score object to hold the game state
        this.score = {
            // Add any other relevant game state properties here
            score: 0,
            level: 1,
        };

        this.readyFood = {
            cookedFries: 0,
            cookedOnionRings: 0,
            cookedChickenTenders: 0,
            cookedBurgers: 0,
        };


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

        }

        // Create an object to hold the fryer data and max out the basket value at 2
        this.fryer1Data = {
            baskets: 0,
        
            addBasket: function(value) {
                if (this.baskets === 0) {
                    console.log('Fryer 1 basket is empty');
                }
                if (this.baskets === 2) {
                    console.log('Fryer 1 is full of baskets');
                }
            }
        };

        // Create an object to hold the fryer data and max out the basket value at 2
        this.fryer2Data = {
            baskets: 0,
        
            addBasket: function(value) {
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

        this.grillData = {
            burgers: 0,



        };


        this.burgerData = {
            cookTime: 0,
        };


        
    }

    update(time, delta) {
    // runs every frame

    //cook time to cook burgers in ms
    const burgertemp = {
        raw: 0,
        rare: 5000,
        medium: 11000,
        well: 35000,
        burnt: 50000,
    }

    }

}

export default GameState;