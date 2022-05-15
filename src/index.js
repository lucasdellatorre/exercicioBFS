const Graph = require('./graph')
const { readFile } = require('fs/promises')
;
class File {

    static async parseFileContent(fileContent) {
        const lines = fileContent.split("\n");
        var map = new Map();
        map = lines.map(line => {
            console.log(line)
            const colums = line.split(',')
            console.log(colums)
            for (const index in colums) {
                console.log(index)
                const [movieTitle, ...cast] = index.split("\'")
                console.log(movieTitle)
                map.set(movieTitle, cast)
            }
            return map;
        })
        //console.log(map)
        return map;
    }

    static async getFileContent(filePath) {
        return (await readFile(filePath)).toString("utf8")
    }
}


(async () => {
    const content = await File.getFileContent('./movies.txt');
    const map = await File.parseFileContent(content);
  })();
  
