const Graph = require('./graph')
const { readFile } = require('fs/promises')
;
class File {
    static async parseFileContent(fileContent) {
        const lines = fileContent.split("\n")
        let map = new Map()
        lines.map(line => {
            const colums = line.split(',')
            for (const index in colums) {
                const [movieTitle, cast] = colums[index].split("/", 2)
                map.set(movieTitle, cast)
            }
        })
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
  
