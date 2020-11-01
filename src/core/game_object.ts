import Vector2 from "./maths/vector2";

export default class GameObject {
    public _position: Vector2;
    public _children: GameObject[];

    constructor() {
        this._position = new Vector2(0, 0);
    }

    draw(ctx, color) {

    }
}
