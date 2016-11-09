/**
 * Created by PlariumCrew on 11/9/2016.
 */
/* globals __DEV__ */
import Phaser from 'phaser'
import {CookieType, Cookie} from '~/src/game/Cookie'
import Level from '~/src/game/Level'
import GameViewController from '~/src/game/GameViewController'

export default class GameScene extends Phaser.State {
    level:Level;
    tileWidth:number = 32;
    tileHeight:number = 36;
    numColumns = 9;
    numRows = 9;
    gameLayer:Phaser.Sprite;
    cookiesLayer:Phaser.Sprite;

    init() {
        let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Test')
        banner.font = 'Nunito'
        banner.fontSize = 40
        banner.fill = '#77BFA3'
        banner.anchor.setTo(0.5)
        console.log("test");

        var gameViewController = new GameViewController(this);
        // https://www.raywenderlich.com/125311/make-game-like-candy-crush-spritekit-swift-part-1
        // var l = new Level();

        this.gameLayer = new Phaser.Sprite();
        this.gameLayer.position = new Phaser.Point(
            this.numColumns * this.tileWidth / 2, this.numRows * this.tileHeight
        );

        this.cookiesLayer = this.game.add.sprite(0, 0, 'rect');
        // this.game.state.add()
        //this.add(this.cookiesLayer);
        // const a = CookieType.getRandomType()
    }

    addSprites(cookies:Set) {
        cookies.forEach((el:Cookie) => {
            let sprite = this.game.add.sprite(0, 0, "rect");
            sprite.position = this.pointFor(el.column, el.row);
            el.sprite = sprite;
        })
    }

    pointFor(column, row):Phaser.Point {
        return new Phaser.Point(
            column*this.tileWidth + this.tileWidth/2,
            row*this.tileHeight + this.tileHeight/2
        );
    }

    preload() {
    }

    create() {

    }

    render() {
    }

    update() {

    }
}