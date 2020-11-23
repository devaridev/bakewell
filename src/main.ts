import {WIDTH,HEIGHT} from "./constants";
import GameScene from "./scene";

class Game {
    private _canvas: any;
    private readonly _ctx: any;
    private _scene: any;
    private _animationFrame: any;
    private _currentTime: number;

    constructor() {
        this._canvas = document.getElementById("g");
        this._ctx = this._canvas.getContext("2d");

        this._canvas.width = WIDTH;
        this._canvas.height = HEIGHT;
        this._canvas.oncontextmenu = () => false;

        this._currentTime = performance.now();

        this._scene = new GameScene();
        this.enable();
    }

    enable() {
        this._animationFrame = requestAnimationFrame(this.animate.bind(this));
    }

    animate(time) {
        this._animationFrame = requestAnimationFrame(this.animate.bind(this));

        let dt = Math.max(0, time - this._currentTime);
        this.loop(dt);
        this._currentTime = time;
    }

    loop(dt) {
        if (!this._scene._loaded) {
            this._scene.load()
        }

        this.clear();

        this._scene.draw(this._ctx);
    }

    clear() {
        var { _ctx } = this;

        _ctx.clearRect(0, 0, WIDTH, HEIGHT);
        _ctx.fillStyle = "#000000";
        _ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }
}

export var _game = new Game()