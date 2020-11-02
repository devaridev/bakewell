import Vector2 from "./maths/vector2";
import {MAX_CHILDREN} from "../constants";

export default class GameObject {
    public _position: Vector2;
    public _children: GameObject[];

    constructor() {
        this._children = new Array(MAX_CHILDREN);
        this._position = new Vector2(0, 0);
    }

    draw(ctx, color) {
        this._children.forEach(function(child: GameObject) {
            child.draw(ctx, color);
        });
    }
}
