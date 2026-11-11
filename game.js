const Phaser = window.Phaser;
import KitchenScene from '/KitchenScene.js';
import FryerScene from '/FryerScene.js';
import GrillScene from './GrillScene.js';

console.log('Game.js loaded');
console.log('Phaser:', window.Phaser);

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

  scene: [KitchenScene, FryerScene, GrillScene]
};

new Phaser.Game(config);