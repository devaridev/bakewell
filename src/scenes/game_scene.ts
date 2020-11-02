import Scene from "../core/scene";
import Vector2 from "../core/maths/vector2";
import Tile from "../tiles/tile";
import Maze from "../maze";

export default class GameScene extends Scene {

    private _maze: Maze

    constructor() {
        super();
        this._maze = new Maze();
    }

    load() {
        console.log("Loading...");
        this._maze.generate();
        this._gameObjects.push(this._maze);

        console.log("Loaded!");
        this._loaded = true;
    }

    update(dt) {
        super.update(dt);
    }

    draw(ctx) {
        super.draw(ctx);
    }
}