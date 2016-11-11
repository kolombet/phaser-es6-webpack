//flow
import Phaser from 'phaser'
import {CookieType, Cookie} from '~/src/game/Cookie'
import Level from '~/src/game/Level'
import GameViewController from '~/src/game/GameViewController'
import Swap from '~/src/game/Swap'

export default class GameScene extends Phaser.State {
    level: Level;
    tileWidth: number = 32;
    tileHeight: number = 36;
    numColumns = 9;
    numRows = 9;
    gameLayer: Phaser.Sprite;
    swipeStart: Cookie;
    prevX: number = 0;
    prevY: number = 0;
    tick: number = 0;
    onSwipeHandler: Phaser.Signal; //Swap -> void

    // https://www.raywenderlich.com/125311/make-game-like-candy-crush-spritekit-swift-part-1

    init(args: Any): void {
        let banner = this.add.text(this.game.world.centerX, this.game.height - 30, 'Test')
        banner.font = 'Nunito'
        banner.fontSize = 40
        banner.fill = '#77BFA3'
        banner.anchor.setTo(0.5)

        this.onSwipeHandler = new Phaser.Signal();

        this.game.input.addMoveCallback(this.moveCallback, this);

        this.gameLayer = this.game.add.sprite(this.tileWidth, this.tileHeight);

        var gameViewController = new GameViewController(this);
    }

    normalizeNumber(value: number): void {
        if (value > 0)
            value = 1;
        if (value < 0)
            value = -1;
        return value;
    }

    moveCallback(pointer: Phaser.Pointer, x: number, y: number): void {
        var deltaX = x - this.prevX;
        var deltaY = y - this.prevY;
        if (Math.abs(deltaX) < 100 || Math.abs(deltaY) < 100)
            return;

        console.log(`delta x:${x - this.prevX} y:${y - this.prevY}`);
        var direction;
        if (x > y)
            direction = {x: this.normalizeNumber(x - this.prevX), y: 0};
        else
            direction = {x: 0, y: this.normalizeNumber(y - this.prevY)};

        this.prevX = x;
        this.prevY = y;

        if (direction.x == 0 && direction.y == 0)
            return;

        // console.log(direction);

        if (this.swipeStart == null)
            return;


        this.tryToSwap(direction.x, direction.y);
        this.swipeStart = null;
    }

    addSprites(cookies: Set): void {
        cookies.forEach((data: Cookie) => {
            var sprite = new Phaser.Sprite(this.game, 0, 0, data.getImageName());
            this.gameLayer.addChild(sprite);
            // let sprite = this.game.add.sprite(0, 0, data.getImageName());

            sprite.anchor.set(.5);
            sprite.position = this.pointFor(data.column, data.row);
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(this.cookieClickDownHandler, this);
            sprite.events.onInputUp.add(this.cookieClickUpHandler, this);

            sprite.data = data;
            data.sprite = sprite;
        })
    }

    tryToSwap(horDelta: number, vertDelta: number): void {
        // if (this.swipeStart)
        let toColumn = this.swipeStart.column + horDelta;
        let toRow = this.swipeStart.row - vertDelta;

        if (toColumn < 0 || toColumn > this.numColumns)
            return;

        if (toRow < 0 || toRow > this.numRows)
            return;

        let toCookie = this.level.cookieAt(toColumn, toRow);
        let fromCookie = this.level.cookieAt(this.swipeStart.column, this.swipeStart.row);
        if (fromCookie == null || toCookie == null)
            return;

        console.log(`from cookie ${fromCookie} to ${toCookie}`);
        let swap = new Swap(fromCookie, toCookie);
        this.onSwipeHandler.dispatch(swap, this);
    }

    cookieClickDownHandler(el: Phaser.Sprite, pointer: Phaser.Pointer) {
        var str = el.data.toString();
        console.log(`cookie click down ${str}`);
        this.swipeStart = el.data;
        this.tick = 0;
    }

    cookieClickUpHandler(el: Phaser.Sprite, pointer: Phaser.Pointer) {
        console.log("cookie click up");
        this.swipeEnd = el.data;
    }

    pointFor(column, row): Phaser.Point {
        return new Phaser.Point(
            column * this.tileWidth,
            row * this.tileHeight
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