import KitchenScene from '/KitchenScene.js';
import FryerScene from '/FryerScene.js';

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

  scene: [KitchenScene, FryerScene]
};

new Phaser.Game(config);