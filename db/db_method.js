const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class API_method {
  read() {
    return readFileAsync('db/db.json', 'utf-8');
  }

  write(data) {
    return writeFileAsync('db/db.json', data);
  }
}

module.exports = new API_method();
