var fs = require('fs'),
  YAML = require('yamljs'),
  Promise = require('bluebird');

module.exports = {

  configFile : require('app-root-dir').get() + '/.githooks',

  get : function (hookType) {
    var self = this;
    return new Promise(function(resolve, reject) {
      try {
        fs.readFile(self.configFile, function (err,content) {
          if (err) return resolve([]);
          return resolve(YAML.parse(content.toString())[hookType] || []);
        });
      } catch(err) {
        return resolve([]);
      }
    });
  },

  run : function(options) {
    var hook = require(['./hooks',options.type, options.name].join('/'));
    return hook.apply(this, options.args.concat([require('./status')]));
  },
};
