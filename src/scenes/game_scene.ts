import Scene from "../core/scene";
import Player from "../entities/player";
import StandardHead from "../entities/parts/human/heads/standard_head";
import Maze from "../maze";
import {HEIGHT, WIDTH} from "../constants";

export default class GameScene extends Scene {
    public _maze: Maze;

    constructor() {
        super();
    }

    load() {
        let mazeWidth = 10;
        let mazeHeight = 10;

        this._maze = new Maze(mazeWidth, mazeHeight);
        this._loaded = true;
        super.load();
    }

    update(dt) {
        super.update(dt);
    }

    draw(ctx) {
        for(let x = 0; x < this._maze._width; x++) {
            for(let y = 0; y < this._maze._height; y++) {
                let cell = this._maze._cells[x][y];

                ctx.lineWidth = 5;
                if (!cell._visited) {
                    ctx.beginPath();
                    ctx.fillStyle = "#96d05a";
                    ctx.fillRect(cell._x * cell._width, cell._y * cell._height, cell._width, cell._height);
                }

                if (cell._top) {
                    ctx.beginPath()
                    ctx.moveTo(cell._x * cell._width, cell._y * cell._height);
                    ctx.lineTo((cell._x * cell._width) + cell._width, cell._y * cell._height);
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                }

                if (cell._bottom) {
                    ctx.beginPath()
                    ctx.moveTo(cell._x * cell._width, (cell._y * cell._height) + cell._height);
                    ctx.lineTo((cell._x * cell._width) + cell._width, (cell._y * cell._height) + cell._height);
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                }

                if (cell._left) {
                    ctx.beginPath()
                    ctx.moveTo(cell._x * cell._width, cell._y * cell._height);
                    ctx.lineTo(cell._x * cell._width, (cell._y * cell._height) + cell._height);
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                }

                if (cell._right) {
                    ctx.beginPath()
                    ctx.moveTo((cell._x * cell._width) + cell._width, cell._y * cell._height);
                    ctx.lineTo((cell._x * cell._width) + cell._width, (cell._y * cell._height) + cell._height);
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                }
            }
        }

        super.draw(ctx);
    }
}