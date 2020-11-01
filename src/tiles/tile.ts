import GameObject from "../core/game_object";

export default class Tile extends GameObject {

    public _width: number;
    public _height: number;

    constructor(width, height) {
        super();

        this._width = width;
        this._height = height;
    }

    draw(ctx, color) {
        ctx.beginPath();
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(this._position.x, this._position.y, this._width, this._height);
        ctx.rect(this._position.x, this._position.y, this._width, this._height);
    }
}