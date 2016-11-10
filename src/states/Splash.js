import Phaser from 'phaser'
import {centerGameObjects} from '../utils'

export default class extends Phaser.State {
    init() {
    }

    preload() {
        this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
        this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
        centerGameObjects([this.loaderBg, this.loaderBar])

        this.load.setPreloadSprite(this.loaderBar)
        //
        // load your assets
        //
        // this.load.image('tile', 'assets/images/mushroom2.png')
        // this.load.image('rect', 'assets/images/rect.png')
        for (var i = 1; i < 7; i++) {
            this.load.image('gem' + i, 'assets/images/Gem' + i + '.png');
        }

        for (var i = 0; i < 4; i++) {
            game.load.json('level' + i, 'assets/levels/Level_' + i + '.json');
        }

    }

    create() {
        this.state.start('GameScene')
    }

}
