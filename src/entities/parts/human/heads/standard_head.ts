import GameObject from "../../../../core/game_object";
import Head from "../head";

export default class StandardHead extends Head {
    draw(ctx, color) {
        // Head
        ctx.fillStyle = this._color;
        ctx.fillRect(this._position.x, this._position.y, 20, 20);

        // Eyes
        ctx.fillStyle = "#000000";
        ctx.fillRect(this._position.x + 5, this._position.y + 5, 3, 3);
        ctx.fillRect(this._position.x + 14, this._position.y + 5, 3, 3);

        super.draw(ctx, color);
    }
}