/**
 * Created by PlariumCrew on 11/9/2016.
 */
import GameScene from '~/src/states/GameScene'
import Level from '~/src/game/Level'

export default class GameViewController {
    scene:GameScene;
    level:Level;

    constructor(scene:GameScene) {
        this.level = new Level();
        this.scene.level = this.level;
        this.beginGame();
    }

    beginGame() {
        this.shuffle();
    }

    shuffle() {
        let newCookies = this.level.shuffle();
        this.scene.addSprites(newCookies);
    }


}