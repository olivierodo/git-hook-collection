require('shelljs/global');

module.exports = {
  exec : function(cmd, silent) {
    silent = silent || false;
    return exec(cmd, {silent:true})
  }
};
