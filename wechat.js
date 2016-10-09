const path = require('path');
module.exports = {
  extends: path.resolve(__dirname, './index.js'),
  env: {
    browser: true,
  },
  globals: {
    wx: false,
    App: false,
    Page: false,
  },
};
