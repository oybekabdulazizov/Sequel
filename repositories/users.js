const express = require('express');
const fs = require('fs');
const crypto = require('crypto');


class UsersRepository {
    constructor (filename) {
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


    async create(attributes) {
        attributes.id = this.randomId();
        const records = await this.getAll();
        records.push(attributes);

        await this.writeAll(records);
        return attributes;
    }


    async writeAll(records) {
        await fs.promises.writeFile(this.filename, JSON.stringify(records, null, 2));
    }


    async getAll() {
        const contents = JSON.parse(await fs.promises.readFile(this.filename, { encoding: 'utf8' }));
        return contents;
    }


    async getOne(id) {
        const records = await this.getAll();
        return records.find(record => record.id === id);
    }

    
    async delete(id) {
        const records = await this.getAll();
        const filteredRecords = records.filter(record => record.id !== id);
        await this.writeAll(filteredRecords);
    }


    async update(id, attributes) {
        const records = await this.getAll();
        const record = records.find(record => record.id === id);

        if (!record) {
            throw new Error(`Record with id ${id} is not found`);
        }

        Object.assign(record, attributes);
        await this.writeAll(records);
    }


    async getOneBy(filters) {
        const records = await this.getAll();

        for (let record of records) {
            let found = true;
            
            for (let key in filters) {
                if (record[key] !== filters[key]) {
                    found = false;
                }
            }

            if (found) {
                return record;
            }
        }
    }


    randomId() {
        return crypto.randomBytes(4).toString('hex');
    }
}

const test = async () => {
    const repo = new UsersRepository('users.json');
    const record = await repo.getOneBy({ email: 'test2@test.com' });
    const users = await repo.getAll();
    console.log(record);
}

module.exports = new UsersRepository('./data/users.json');