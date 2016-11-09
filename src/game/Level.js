import Array2D from '~/src/util/Array2D'
import {Cookie, CookieType} from './Cookie'

export default class Level {
    numColumns = 9;
    numRows = 9;
    cookies:Array2D;

    constructor() {
        this.cookies = new Array2D(this.numColumns, this.numRows);
    }

    cookieAt(column, row):Cookie {
        return this.cookies.g(column, row);
    }

    shuffle() {
        return this.createInitialCookies();
    }

    createInitialCookies() {
        var set = new Set();
        for (var row = 0; row < this.numRows; row++) {
            for (var column = 0; column < this.numColumns; column++) {
                let cookieType:CookieType = CookieType.getRandomType();

                let cookie = new Cookie({column, row, cookieType});
                this.cookies.s(column, row, cookie);

                set.add(cookie);
            }
        }
        return set;
    }
}