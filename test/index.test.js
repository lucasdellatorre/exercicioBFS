const Graph = require('./../src/graph')
const File = require('./../src/index')
const { deepStrictEqual } = require('assert')
const FILE_PATH = {
    movie: './../data/movies.txt'
}
;

(async () => {
    const content = await File.getFileContent(FILE_PATH.movie);
    const map = await File.parseFileContent(content);
    //console.log(map)
    g = new Graph(12000);
    
    map.forEach((key, value) => {
        g.addVertex(key)
        g.addVertex(value)
        g.addEdge(key, value)
    })

    g.bfs(map.get())
    {
        const actor1 = 'Kevin Bacon'
        const actor2 = 'Chuck Norris'

        
    }
  })();
  