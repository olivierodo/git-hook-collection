var fs = require('fs'),
  Promise = require('bluebird');

module.exports = {

  configFile : require('app-root-dir').get() + '/.githooks',

  get : function (hookType) {
    var self = this;
    return new Promise(function(resolve, reject) {
      try {
        fs.readFile(self.configFile, function (err,content) {
          if (err) return resolve([]);
          return resolve(JSON.parse(content)[hookType] || []);
        });
      } catch(err) {
        return resolve([]);
      }
    });
  }
};
