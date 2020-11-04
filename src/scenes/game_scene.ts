import Scene from "../core/scene";
import Maze from "../maze";
import DFSMaze from "../dfs_maze";

export default class GameScene extends Scene {
    public _maze: Maze;
    public _generateButton;
    public _clearButton;

    constructor() {
        super();

        this._generateButton = document.getElementById("generateMaze");
        this._clearButton = document.getElementById("clearMaze");
    }

    private generateMaze() {
        let mazeWidth: number = parseInt((<HTMLInputElement>document.getElementById("width")).value);
        let mazeHeight: number = parseInt((<HTMLInputElement>document.getElementById("height")).value);

        if (isNaN(mazeWidth) || isNaN(mazeHeight)) {
            mazeWidth = 10;
            mazeHeight = 10;

            (<HTMLInputElement>document.getElementById("width")).value = '10';
            (<HTMLInputElement>document.getElementById("height")).value = '10';
        }

        this._maze.generate(mazeWidth, mazeHeight)
    }

    load() {
        let mazeWidth = 10;
        let mazeHeight = 10;

        this._maze = new DFSMaze(mazeWidth, mazeHeight);
        this._maze.clearMaze();

        // Events.
        this._generateButton.addEventListener("click", Event => this.generateMaze());

        this._clearButton.addEventListener("click", Event => this._maze.clearMaze());

        this._loaded = true;
        super.load();
    }

    update(dt) {
        super.update(dt);
    }

    draw(ctx) {
        for(let x = 0; x < this._maze._width; x++) {
            for(let y = 0; y < this._maze._height; y++) {
                let cell = this._maze._cells[x][y];

                ctx.lineWidth = 5;
                if (!cell._visited) {
                    ctx.beginPath();
                    ctx.fillStyle = "#96d05a";
                    ctx.fillRect(cell._x * cell._width, cell._y * cell._height, cell._width, cell._height);
                }
                else {
                    ctx.beginPath();
                    ctx.fillStyle = "#e9c938";
                    ctx.fillRect(cell._x * cell._width, cell._y * cell._height, cell._width, cell._height);
                }

                if (cell._top) {
                    ctx.beginPath()
                    ctx.moveTo(cell._x * cell._width, cell._y * cell._height);
                    ctx.lineTo((cell._x * cell._width) + cell._width, cell._y * cell._height);
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                }

                if (cell._bottom) {
                    ctx.beginPath()
                    ctx.moveTo(cell._x * cell._width, (cell._y * cell._height) + cell._height);
                    ctx.lineTo((cell._x * cell._width) + cell._width, (cell._y * cell._height) + cell._height);
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                }

                if (cell._left) {
                    ctx.beginPath()
                    ctx.moveTo(cell._x * cell._width, cell._y * cell._height);
                    ctx.lineTo(cell._x * cell._width, (cell._y * cell._height) + cell._height);
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                }

                if (cell._right) {
                    ctx.beginPath()
                    ctx.moveTo((cell._x * cell._width) + cell._width, cell._y * cell._height);
                    ctx.lineTo((cell._x * cell._width) + cell._width, (cell._y * cell._height) + cell._height);
                    ctx.strokeStyle = "#ffffff";
                    ctx.stroke();
                }
            }
        }

        super.draw(ctx);
    }
}