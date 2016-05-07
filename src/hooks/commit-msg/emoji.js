
module.exports = function(msg) {
  var emo = '',
  list = {
    'fix' : 'wrench',
    'add':'git',
  };
  Object.keys(list).forEach(function (key) {
    if (msg.trim().split(' ')[0].toLowerCase() === key)
      emo = [':',list[key],':'].join('');
  });
  return [emo, msg].join(' ').trim();
};
