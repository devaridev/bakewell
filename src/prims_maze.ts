import Maze from "./maze";

export default class PrimsMaze extends Maze
{
    generate() {
        let randomX = Math.floor(Math.random() * Math.floor(this._width));
        let randomY = Math.floor(Math.random() * Math.floor(this._height));

        let startCell = this._cells[randomX][randomY];
        startCell._visited = true;
        this._stack.push(startCell);

        setInterval(function(_stack, unvisitedFunc, breakWallsFunc, mazeCells, width, height) {
            if (_stack.length) {
                let randomCell = Math.floor(Math.random() * Math.floor(_stack.length));
                let frontierCell = _stack[randomCell];

                let neighbours = unvisitedFunc(frontierCell, mazeCells, width, height).filter(function(cell) {
                   return !cell._visited;
                });

                if (neighbours.length) {
                    let randomNeighbour = Math.floor(Math.random() * Math.floor(neighbours.length));
                    let inNeighbourCell = neighbours[randomNeighbour];

                    breakWallsFunc(inNeighbourCell, frontierCell);
                }

                unvisitedFunc(frontierCell, mazeCells, width, height).filter(function(cell) {
                    return !cell._visited;
                }).forEach(cell => _stack.push(cell));

                frontierCell._visited = true;
                _stack.splice(randomCell, 1);
            }
        }, 1, this._stack, this.getNeighbours, this.breakWalls, this._cells, this._width, this._height);
    }
}