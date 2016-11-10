/* globals __DEV__ */
import Phaser from 'phaser'
// import Tile from '../sprites/Tile'
// import {setResponsiveWidth} from '../utils'

export default class extends Phaser.State {
    init() {
    }

    preload() {
    }

    create() {
        // let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Test')
        // banner.font = 'Nunito'
        // banner.fontSize = 40
        // banner.fill = '#77BFA3'
        // banner.anchor.setTo(0.5)
        //
        // this.tile = new Tile({
        //     game: this.game,
        //     x: this.game.world.centerX,
        //     y: this.game.world.centerY,
        //     asset: 'rect'
        // })
        //
        // var map = []
        // for (var x = 0; x < 10; x++)
        // {
        //     map[x] = [];
        //     for (var y = 0; y < 10; y++)
        //     {
        //         var tile = new Tile({
        //             game: this.game,
        //             x: x*32,
        //             y: y*32,
        //             asset: 'rect',
        //             isOccupied: false
        //         });
        //
        //         map[x][y] = tile;
        //         this.game.add.existing(tile);
        //     }
        // }

        // console.log(JSON.stringify(map));

        // set the sprite width to 30% of the game width
        // setResponsiveWidth(this.tile, 30, this.game.world)
        // this.game.add.existing(this.tile)
    }

    render() {
        if (__DEV__) {
            // this.game.debug.spriteInfo(this.tile, 32, 32)
        }
    }

    update() {

        // this.tile.angle += 5;
    }
}