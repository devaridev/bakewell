class Cell {
    public _x : number = 0;
    public _y : number = 0;
    public _width: number = 0;
    public _height: number = 0;
    public _left: boolean =  true;
    public _right: boolean =  true;
    public _top: boolean = true;
    public _bottom: boolean = true;
    public _visited: boolean = false;

    constructor(x, y, width = 10, height = 10) {
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }
}
export default class Maze {
    public _width: number = 0;
    public _height: number = 0;
    public _cells: Cell[][] = [];
    public _stack: Cell[] = [];

    constructor(width, height, cellWidth = 10, cellHeight = 10) {
        this._width = width;
        this._height = height;

        for(let x = 0; x < this._width; x++) {
            this._cells[x] = [];
            for(let y = 0; y < this._height; y++) {
                this._cells[x][y] = new Cell(x, y, cellWidth, cellHeight);
            }
        }

        let randomX = Math.floor(Math.random() * Math.floor(this._width));
        let randomY = Math.floor(Math.random() * Math.floor(this._height));

        let startCell = this._cells[randomX][randomY];
        startCell._visited = true;
        this._stack.push(startCell);

        setInterval(function(_stack, unvisitedFunc, mazeCells, width, height) {
            if (_stack.length) {
                let currentCell = _stack.pop();
                let unvisitedNeighbours = unvisitedFunc(currentCell, mazeCells, width, height).filter(function(cell) {
                    return !cell._visited;
                });

                if (unvisitedNeighbours.length) {
                    _stack.push(currentCell);
                    let randomCell = Math.floor(Math.random() * Math.floor(unvisitedNeighbours.length));
                    currentCell = unvisitedNeighbours[randomCell];
                    currentCell._visited = true;
                    _stack.push(currentCell);
                }
            }
        }, 300, this._stack, this.getNeighbours, this._cells, this._width, this._height);


        // while (this._stack.length) {
        //     let currentCell = this._stack.pop();
        //     let unvisitedNeighbours = this.getUnvisitedNeighbours(currentCell);
        //
        //     if (unvisitedNeighbours.length) {
        //         this._stack.push(currentCell);
        //         let randomCell = Math.floor(Math.random() * Math.floor(unvisitedNeighbours.length));
        //         currentCell = unvisitedNeighbours[randomCell];
        //         currentCell._visited = true;
        //         this._stack.push(currentCell);
        //     }
        // }
    }

    getNeighbours(cell: Cell, cells: Cell[], width: number, height: number) {
        let cellX: number = cell._x;
        let cellY: number = cell._y;
        let neighbours: Cell[] = [];
        let mazeCells = cells;

        if (cellX > 0) { // Left
            neighbours.push(mazeCells[cellX - 1][cellY]);
        }

        if ( cellX < (width - 1)) { // Right
            neighbours.push(mazeCells[cellX + 1][cellY]);
        }

        if (cellY > 0) { // Top
            neighbours.push(mazeCells[cellX][cellY - 1]);
        }

        if (cellY < (height - 1)) { // Bottom
            neighbours.push(mazeCells[cellX][cellY + 1]);
        }

        return neighbours;
    }

    getUnvisitedNeighbours(cell: Cell, cells: Cell[], width, height) {
        return this.getNeighbours(cell, cells, width, height).filter(function(cell) {
            return !cell._visited;
        });
    }
}