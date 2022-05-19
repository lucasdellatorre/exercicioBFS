const Queue = require('./queue');
// create a graph class
class Graph {
  // defining vertex array and
  // adjacent list
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }

  // functions to be implemented

  addVertex(v) {
    // initialize the adjacent list with a
    // null array
    this.AdjList.set(v, []);
  }

  // add edge to the graph
  addEdge(v, w) {
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);

    // Since graph is undirected,
    // add an edge from w to v also
    this.AdjList.get(w).push(v);
  }

  // printGraph()

  // function to performs BFS
  bfs(actor1, actor2) {
    // create a visited object
    let visited = {};

    // Create an object for queue
    let q = new Queue();

    // add the starting node to the queue
    visited[actor1] = true;
    q.enqueue(actor1);

    // loop until queue is empty
    while (q.peek() === actor2) {
      console.log(q.peek())
      // get the element from the queue
      let getQueueElement = q.dequeue();

      // passing the current vertex to callback function
      console.log(getQueueElement);

      // get the adjacent list for current vertex
      let get_List = this.AdjList.get(getQueueElement);

      // loop through the list and add the element to the
      // queue if it is not processed yet
      for (let i in get_List) {
        let neigh = get_List[i];

        if (!visited[neigh]) {
          visited[neigh] = true;
          q.enqueue(neigh);
        }
      }
    }
    return q.size();
  }
  printGraph() {
    // get all the vertices
    let get_keys = this.AdjList.keys();

    // iterate over the vertices
    for (let i of get_keys) {
      // great the corresponding adjacency list
      // for the vertex
      let get_values = this.AdjList.get(i);
      let conc = "";

      // iterate over the adjacency list
      // concatenate the values into a string
      for (let j of get_values) conc += j + " ";

      // print the vertex and its adjacency list
      console.log(i + " -> " + conc);
    }
  }

  
}

module.exports = Graph;
