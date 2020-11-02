import Tile from "./tiles/tile";
import GameObject from "./core/game_object";
import {WIDTH, HEIGHT} from "./constants";
import MazeGenerator from "./maze_generator";

export default class Maze extends GameObject {
    public _generated: boolean = false;

    constructor() {
        super();
    }

    generate() {
        // let maxRows: number = Math.floor(WIDTH / 16);
        // let maxCols: number = Math.floor(HEIGHT / 16);

        let maxRows: number = 40;
        let maxCols: number = 40;

        let nodes = MazeGenerator.generateMaze(maxRows, maxCols);

        for (let x = 0; x < maxRows; x++) {
            for (let y = 0; y < maxCols; y++) {
                if (!nodes[x][y]._passage) { // So this isn't a maze passage.
                    let tile: Tile = new Tile(16, 16);
                    tile._position.x = (nodes[x][y].x * tile._width);
                    tile._position.y = (nodes[x][y].y * tile._height);

                    this._children.push(tile);
                }
            }
        }

        this._generated = true;
    }

    draw(ctx, color) {
        super.draw(ctx, color);
    }
}