import {WIDTH,HEIGHT} from "./constants";
import Scene from './scenes/scene';

class Game {
    private _canvas: any;
    private _ctx: any;
    private _animationFrame: any;
    private _currentTime: number;

    constructor() {
        this._canvas = document.getElementById("g");
        this._ctx = this._canvas.getContext("2d");

        this._canvas.width = WIDTH;
        this._canvas.height = HEIGHT;
        this._canvas.oncontextmenu = () => false;

        this._currentTime = performance.now();

        this.enable();
    }

    enable() {
        this._animationFrame = requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        this._animationFrame = requestAnimationFrame(this.animate.bind(this));

        var dt = Math.max(0, time - this._currentTime);
        this.update(dt);
        this._currentTime = time;
    }

    update(dt) {
        this.draw();
    }

    draw() {
        var { _ctx } = this;

        _ctx.clearRect(0, 0, WIDTH, HEIGHT);
        _ctx.fillStyle = "#000000";
        _ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }
}

export var _game = new Game()