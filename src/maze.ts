import Tile from "./tiles/tile";
import GameObject from "./core/game_object";

export default class Maze extends GameObject {
    public _tiles: Tile[];

    constructor() {
        super();
    }

    generate() {
        console.log("generate");
    }
}