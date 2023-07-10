const fs = require('fs');
const util = require('util');
const path = require('path')

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class API_method {
  read() {
    return readFileAsync(path.join(__dirname,'db/db.json'), 'utf-8');
  }

  write(data) {
    return writeFileAsync(path.join(__dirname,'db/db.json'), data);
  }
}

module.exports = new API_method();
