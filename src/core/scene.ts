import GameObject from "./game_object";
import {MAX_GAMEOBJECTS} from "../constants";

export default class Scene {

    public _gameObjects: GameObject[];
    public _loaded: boolean = false;

    constructor() {
        this._gameObjects = new Array(MAX_GAMEOBJECTS);
    }

    load() {

    }

    update(dt) {

    }

    draw(ctx) {
        this._gameObjects.forEach(function(object: GameObject) {
            object.draw(ctx, "000000");
        });
    }

    addGameObject(object: GameObject) {
        this._gameObjects.push(object);
    }
}