const path = require('path');
module.exports = {
  'extends': path.resolve(__dirname, './index.js'),
  'env': {
    'mocha': true,
  },
};
