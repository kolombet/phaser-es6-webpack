/**
 * Created by Kolombet on 11/9/2016.
 */
import GameScene from '~/src/states/GameScene'
import Level from '~/src/game/Level'
import Phaser from 'phaser'

export default class GameViewController {
    scene:GameScene;
    level:Level;

    constructor(scene:GameScene) {
        this.level = new Level(scene, 3);
        this.scene = scene;
        this.scene.level = this.level;
        this.beginGame();

        var inp:Phaser.Input = scene.game.input;
        inp.addMoveCallback(this.moveCallback);
        inp.onDown.add(this.itemTouched);
        inp.onUp.add(this.itemTouched);
        console.log('test')
    }

    moveCallback(pointer:Phaser.Pointer, x:number, y:number) {
        if (pointer.isDown) {
            console.log("mouse down");
        }
    }

    itemTouched(pointer:Phaser.Pointer) {

    }

    beginGame() {
        this.shuffle();
    }

    shuffle() {
        let newCookies = this.level.shuffle();
        this.scene.addSprites(newCookies);
    }


}