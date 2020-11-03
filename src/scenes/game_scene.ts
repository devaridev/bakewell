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
        let mazeWidth = 50;
        let mazeHeight = 50;
        let cellWidth = WIDTH / mazeWidth;
        let cellHeight = HEIGHT / mazeHeight;

        this._maze = new Maze(mazeWidth, mazeHeight, cellWidth, cellHeight);
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

                if (cell._visited) {
                    ctx.beginPath();
                    ctx.fillStyle = "#FF0000";
                    ctx.fillRect(cell._x * cell._width, cell._y * cell._height, cell._width, cell._height);
                    ctx.strokeFill = "#000000";
                    ctx.strokeRect(cell._x * cell._width, cell._y * cell._height, cell._width, cell._height);
                }
            }
        }

        super.draw(ctx);
    }
}