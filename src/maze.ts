import Cell from "./cell";
import {HEIGHT, WIDTH} from "./constants";

export default abstract class Maze {
    protected _width: number = 0;
    protected _height: number = 0;
    protected _cells: Cell[][] = [];
    protected _cellWidth: number = 0;
    protected _cellHeight: number = 0;

    protected constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
        this._cellWidth = WIDTH / this._width;
        this._cellHeight = HEIGHT / this._height;
    }

    public abstract generate(width: number, height: number);
    public abstract clear();

    public getWidth() { return this._width; }
    public getHeight() { return this._height; }
    public getCells() { return this._cells; }
    public getCellWidth() { return this._cellWidth; }
    public getCellHeight() { return this._cellHeight; }
}