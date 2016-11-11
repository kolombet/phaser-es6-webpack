/**
 * Created by Kolombet on 11/9/2016.
 */
import GameScene from '~/src/states/GameScene'
import Level from '~/src/game/Level'
import Phaser from 'phaser'
import Swap from '~/src/game/Swap'

export default class GameViewController {
    scene:GameScene;
    level:Level;

    constructor(scene:GameScene) {
        this.level = new Level(scene, 3);
        this.scene = scene;
        this.scene.level = this.level;
        this.beginGame();
        // this.scene.onSwipeHandler.add(this.animate, this);

        // var inp:Phaser.Input = scene.game.input;
        // inp.addMoveCallback(this.moveCallback);
        // inp.onDown.add(this.itemTouched);
        // inp.onUp.add(this.itemTouched);
        // console.log('test')
    }

    // moveCallback(pointer:Phaser.Pointer, x:number, y:number) {
    //     if (pointer.isDown) {
    //         console.log("mouse down");
    //     }
    // }
    //
    // itemTouched(pointer:Phaser.Pointer) {
    //
    // }

    animate(swap:Swap) {
        if (swap == null) {
            new Error("no swap");
            return;
        }

        let spriteA = swap.cookieA.sprite;
        let spriteB = swap.cookieB.sprite;

        let sprite1Pos = spriteA.position.clone();
        let sprite2Pos = spriteB.position.clone();

        let tweenTime = 300;

        this.scene.game.add
            .tween(spriteA.position)
            .to(sprite2Pos, tweenTime, Phaser.Easing.Bounce.Out, true);

        this.scene.game.add
            .tween(spriteB.position)
            .to(sprite1Pos, tweenTime, Phaser.Easing.Bounce.Out, true);
    }

    beginGame() {
        this.shuffle();
    }

    shuffle() {
        let newCookies = this.level.shuffle();
        this.scene.addSprites(newCookies);
    }


}