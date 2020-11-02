class Node {
    public x: number = 0;
    public y: number = 0;
    public _passage: boolean = false;
    public _visited: boolean = false;
}

// This uses the Randomized Prim's Algorithm
// See: https://en.wikipedia.org/wiki/Maze_generation_algorithm#Randomized_Prim.27s_algorithm
export default class MazeGenerator {
    private static _width: number;
    private static _height: number;

    static getNodeNeighbours(node: Node, graph) {
        let nodes = [];
        let x = node.x;
        let y = node.y;

        // Left
        if (graph[x-1]) {
            if (!graph[x-1][y]._visited) {
                nodes.push(graph[x-1][y]);
            }
            else {
                nodes.push(-1);
            }
        }

        // Right
        if (graph[x+1]) {
            if (!graph[x+1][y]._visited) {
                nodes.push(graph[x+1][y]);
            }
            else {
                nodes.push(-1);
            }
        }

        // Top
        if (graph[y-1]) {
            if (!graph[x][y-1]._visited) {
                nodes.push(graph[x][y-1]);
            }
            else {
                nodes.push(-1);
            }
        }

        // Bottom
        if (graph[y+1]) {
            if (!graph[x][y+1]._visited) {
                nodes.push(graph[x][y+1]);
            }
            else {
                nodes.push(-1);
            }
        }

        return nodes.filter(function(node) {
            return node !== -1;
        });
    }

    static generateMaze(width: number, height: number) {
        this._width = width;
        this._height = height;

        let graph: Node[][] = [];
        let frontier: Node[] = [];

        // Create our grid full of walls.
        for (let w = 0; w < width; w++) {
            graph[w] = [];
            for (let h = 0; h < height; h++) {
                let node: Node = new Node;
                node.x = w;
                node.y = h;
                graph[w][h] = node;
            }
        }

        let randomX: number = Math.floor(Math.random() * Math.floor(this._width));
        let randomY: number = Math.floor(Math.random() * Math.floor(this._height));

        let initialNode: Node = graph[randomX][randomY];
        initialNode._passage = true;
        initialNode._visited = true;
        
        this.getNodeNeighbours(initialNode, graph).forEach(node => frontier.push(node));

        while (frontier.length > 0) {
            let randomFrontierCell: number = Math.floor(Math.random() * Math.floor(frontier.length));
            let frontierNode: Node = frontier[randomFrontierCell];

            // let adjNodes = this.getNodeNeighbours(frontierNode, graph);
            // let randomNeighbour: number = Math.floor(Math.random() * Math.floor(adjNodes.length));

            // let blocked = this.getNodeNeighbours(adjNodes[randomNeighbour], graph).filter(node => node._passage).length;
            //
            // if (!blocked) {
            //     adjNodes.forEach(node => frontier.push(node));
            // }

            frontierNode._passage = true;
            frontierNode._visited = true;
            frontier.splice(randomFrontierCell, 1);
        }

        return graph;
    }
}