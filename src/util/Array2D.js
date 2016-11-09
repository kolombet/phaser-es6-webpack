/**
 * Created by PlariumCrew on 11/9/2016.
 */
export default class Array2D {
    columns;
    rows;
    _array;

    constructor(columns, rows) {
        this.columns = columns;
        this.rows = rows;
        this._array = [];
    }

    /**
     * Return
     * @param column
     * @param row
     */
    g(column, row) {
        return this._array[row * this.columns + column];
    }

    s(column, row, value) {
        this._array[row * this.columns + column] = value;
    }
}