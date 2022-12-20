const fs = require('fs');

class MoviesRepository {
    constructor(filename) {
        if (!filename) {
            throw new Error('Creating a repository requires a filename');
        }
        this.filename = filename;
        try {
            fs.accessSync(this.filename);
        } catch (err) {
            fs.writeFileSync(this.filename, '[]');
        }
    }


    async getAll() {
        const contents = JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
        return contents;
    }


    async getOne(imdbID) {
        const records = await this.getAll();
        return records.find(record => record.imdbID === imdbID);
    }


    async writeAll(records) {
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
    }
}


module.exports = new MoviesRepository('./data/movies.json');