const fs = require('fs');

const pathExists = (route) => fs.existsSync(route);

module.exports = {
  pathExists,
};
