var colors = require('colors');

module.exports = {
  log : function(msg) {
    console.log(msg);
  },
  warn : function(msg) {
    return this.log(msg.yellow);
  },

  success : function(msg) {
    return this.log(msg.green);
  },

  error : function(msg) {
    this.log(msg.red);
    throw new ReferenceError(msg);
  },
};
