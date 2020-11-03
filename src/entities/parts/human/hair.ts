import GameObject from "../../../core/game_object";

export default class Hair extends GameObject {
    draw(ctx, color) {
        ctx.fillStyle = "#5f4633";
        ctx.fillRect(this._position.x , this._position.y, 20, 30);

        super.draw(ctx, color);
    }
}