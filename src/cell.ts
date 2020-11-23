export default class Cell {
    public _x : number = 0;
    public _y : number = 0;
    public _width: number = 0;
    public _height: number = 0;
    public _left: boolean =  true;
    public _right: boolean =  true;
    public _top: boolean = true;
    public _bottom: boolean = true;
    public _visited: boolean = false;

    constructor(x, y, width = 10, height = 10) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }
}