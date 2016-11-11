import Phaser from "phaser"
import {Cookie} from "./Cookie"

export default class Swap {
    cookieA:Cookie;
    cookieB:Cookie;

    constructor(cookieA:Cookie, cookieB:Cookie) {
        this.cookieA = cookieA;
        this.cookieB = cookieB;
    }

    description():string {
        return `swap ${this.cookieA} with ${this.cookieB}`;
    }
}