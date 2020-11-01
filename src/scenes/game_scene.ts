import Scene from "../core/scene";
import Vector2 from "../core/maths/vector2";
import Tile from "../tiles/tile";
import Maze from "../maze";

export default class GameScene extends Scene {

    private _tile: Tile;
    private _maze: Maze

    constructor() {
        super();
        this._maze = new Maze();
    }

    load() {
        this._maze.generate();
        this._loaded = true;
    }

    update(dt) {
        super.update(dt);
    }

    draw(ctx) {
        super.draw(ctx);

    }
}