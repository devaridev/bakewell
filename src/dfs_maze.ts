import Maze from "./maze";

export default class DFSMaze extends Maze
{
    generate() {
        let randomX = Math.floor(Math.random() * Math.floor(this._width));
        let randomY = Math.floor(Math.random() * Math.floor(this._height));

        let startCell = this._cells[randomX][randomY];
        startCell._visited = true;
        this._stack.push(startCell);

        setInterval(function(_stack, unvisitedFunc, breakWallsFunc, mazeCells, width, height) {
            if (_stack.length) {
                let currentCell = _stack.pop();
                let unvisitedNeighbours = unvisitedFunc(currentCell, mazeCells, width, height).filter(function(cell) {
                    return !cell._visited;
                });

                if (unvisitedNeighbours.length) {
                    _stack.push(currentCell);

                    let randomCell = Math.floor(Math.random() * Math.floor(unvisitedNeighbours.length));
                    let neighbourCell = unvisitedNeighbours[randomCell];

                    breakWallsFunc(currentCell, neighbourCell);

                    currentCell = neighbourCell;
                    currentCell._visited = true;
                    _stack.push(currentCell);
                }
            }
        }, 1, this._stack, this.getNeighbours, this.breakWalls, this._cells, this._width, this._height);
    }
}