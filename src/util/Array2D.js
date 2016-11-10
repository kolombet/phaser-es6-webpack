/* @flow */
export default class Array2D {
    columns:number;
    rows:number;
    _array:Array<mixed>;
    size:number;

    constructor(columns:number, rows:number) {
        this.columns = columns;
        this.rows = rows;
        this.size = columns * rows;
        this._array = new Array(this.size);
    }

    /**
     * Return
     * @param column
     * @param row
     */
    g(column:number, row:number) {
        var index = row * this.columns + column;
        if (index < 0 || index > this.size)
            throw new Error("out of bounds");
        return this._array[index];
    }

    s(column:number, row:number, value:any) {
        let index = row * this.columns + column;
        if (index < 0 || index > this.size)
            throw new Error("out of bounds");
        this._array[index] = value;
    }

    toString() {
        return JSON.stringify(this._array);
    }
}