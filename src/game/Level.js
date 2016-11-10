/* @flow */

import Array2D from '~/src/util/Array2D'
import {Cookie, CookieType} from './Cookie'
import Tile from './Tile'
import Phaser from 'phaser'

export default class Level {
    numColumns:number = 9;
    numRows:number = 9;
    cookies:Array2D;
    tiles:Array2D;
    scene:Phaser.State;
    levelID:number;

    constructor(scene:Phaser.State, levelID:number) {
        this.levelID = levelID;
        this.scene = scene;
        this.cookies = new Array2D(this.numColumns, this.numRows);
        this.tiles = new Array2D(this.numColumns, this.numRows);

        this.init();
    }

    cookieAt(column:number, row:number):Cookie {
        return this.cookies.g(column, row);
    }

    shuffle() {
        return this.createInitialCookies();
    }

    createInitialCookies() {
        console.log("create initial cookies");
        let set = new Set();
        for (var row = 0; row < this.numRows; row++) {
            for (var column = 0; column < this.numColumns; column++) {
                var tile = this.tiles.g(column, row) == null ? "null" : "notnull";
                // console.log(`tile ${row}x${column} is ${tile}`);


                if (this.tiles.g(column, row) != null) {
                    let cookieType:CookieType = CookieType.getRandomType();

                    let cookie = new Cookie({column, row, cookieType});
                    this.cookies.s(column, row, cookie);

                    set.add(cookie);
                }
            }
        }
        return set;
    }

    tileAt(column:number, row:number):Tile {
        return this.tiles.g(column, row);
    }

    init() {
        let level = this.scene.game.cache.getJSON('level' + this.levelID);
        if (!level) return;

        let tiles = level.tiles;
        if (!tiles) return;

        for (let [row, rowArray] of Object.entries(tiles)) {
            let tileRow = this.numRows - parseInt(row) - 1;

            for (let [column, value] of Object.entries(rowArray)) {
                if (value == 1) {
                    this.tiles.s(parseInt(column), tileRow, new Tile());
                }
            }
        }
        console.log("level tile init complete");
    }
}