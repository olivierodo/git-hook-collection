
module.exports = function(msg, s) {
  var emo = '',
  list = {
    'fix' : 'wrench',
    'add':'gift',
    'added':'gift',
    'update':'muscle',
    'updated':'muscle',
    'change':'muscle',
    'improve' : 'lipstick',
    'write' : 'memo',
    'doc' : 'memo',
    'remove' : 'fire',
    'secure' : 'lock',
    'upgrading' : 'arrow_up',
    'downgrading' : 'arrow_down',
    'conflict' : 'boom',
    'merge' : 'seedling',
    'test' : 'white_check_mark',
    'refactor':'sunglasses',
    'patch' : 'gift_heart',
    'revert' : 'back',
    'stop' : 'bangbang',
    'perf' : 'racehorse',
    'missing' : 'ghost',
    'move' : 'rocket',
    'moving' : 'rocket',
    'link' : 'link',
    'linking' : 'link',
  };
  Object.keys(list).forEach(function (key) {
    if (msg.trim().split(' ')[0].toLowerCase() === key)
      emo = [':',list[key],':'].join('');
  });
  return [emo, msg].join(' ').trim();
};
