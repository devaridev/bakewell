import GameObject from "../core/game_object";
import Head from "./parts/human/head";
import Hair from "./parts/human/hair";

export default class Player extends GameObject {
    public _hair: Hair = null;
    public _head: Head = null;

    load() {
        super.load();
        this._children.push(this._head);


    }

    draw(ctx, color) {
        super.draw(ctx, color);
    }
}