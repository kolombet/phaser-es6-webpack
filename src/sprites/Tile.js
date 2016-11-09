import Phaser from 'phaser'

export default class extends Phaser.Sprite {
  constructor ({game, x, y, asset, isOccupied}) {
    super(game, x, y, asset);
    this.isOccupied = isOccupied;
    this.game = game;
    this.anchor.setTo(0.5)
  }

  update () {
  }
}


// export default class Tile {
//
//   constructor ({game, x, y, asset}) {
//     // super(game, x, y, asset)
//
//     this.game = game;
//     // this.anchor.setTo(0.5)
//   }
//
//   update () {
//   }
// }