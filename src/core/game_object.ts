import Vector2 from "./maths/vector2";
import {MAX_CHILDREN} from "../constants";

export default class GameObject {
    public _position: Vector2;
    public _color: string;
    public _children: GameObject[];

    constructor() {
        this._children = new Array(MAX_CHILDREN);
        this._position = new Vector2(0, 0);
    }

    load() {
        this._children.forEach(function(child: GameObject) {
            child.load();
        });
    }

    update(dt) {
        this._children.forEach(function(child: GameObject) {
            child.update(dt);
        });
    }

    draw(ctx, color) {
        this._children.forEach(function(child: GameObject) {
            child.draw(ctx, color);
        });
    }
}
