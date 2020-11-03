import Scene from "../core/scene";
import Player from "../entities/player";
import StandardHead from "../entities/parts/human/heads/standard_head";

export default class GameScene extends Scene {
    constructor() {
        super();
    }

    load() {
        let player: Player = new Player();
        player._head = new StandardHead();
        this._gameObjects.push(player);

        this._loaded = true;
        super.load();
    }

    update(dt) {
        super.update(dt);
    }

    draw(ctx) {
        super.draw(ctx);
    }
}