const crypto = require('crypto');
const util = require('util');
const Repository = require('./repository');

const scrypt = util.promisify(crypto.scrypt);


class UsersRepository extends Repository{
    async create(attributes) {
        attributes.id = this.randomId();
        const salt = this.salt();
        const hashedPassword = await scrypt(attributes.password, salt, 64);

        const record = {
            ...attributes,
            password: `${hashedPassword.toString('hex')}.${salt}`
        };

        const records = await this.getAll();
        records.push(record);

        await this.writeAll(records);
        return record;
    }


    salt() {
        return crypto.randomBytes(8).toString('hex');
    }


    async comparePasswords(saved, received) {
        const [hashedPasswordSaved, salt] = saved.split('.');
        const hashedPasswordReceived = await scrypt(received, salt, 64);

        return hashedPasswordSaved === hashedPasswordReceived.toString('hex');
    }
}


module.exports = new UsersRepository('./data/users.json');