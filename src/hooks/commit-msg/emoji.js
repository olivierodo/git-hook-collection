
module.exports = function(msg, s) {
  var emo = '',
  list = {
    'wrench' : ['fix'],
    'gift' : ['add','added'],
    'muscle' : ['update', 'updated', 'change'],
    'lipstick' : ['improve'],
    'memo' : ['write', 'doc'],
    'fire' : ['remove'],
    'lock' : ['secure'],
    'arrow_up' : ['upgrading'],
    'arrow_down' : ['downgrading'],
    'boom' : ['conflict'],
    'seedling' : ['merge'],
    'white_check_mark' : ['test'],
    'sunglasses' : ['refactor'],
    'gift_heart' : ['patch'],
    'back' : ['revert'],
    'bangbang' : ['stop'],
    'racehorse' : ['perf'],
    'ghost' : ['missing'],
    'rocket' : ['move', 'moving'],
    'link' : ['link', 'linking'],
  };
  Object.keys(list).forEach(function (key) {
    if ( -1 !== list[key].indexOf(msg.trim().split(' ')[0].toLowerCase()))
      emo = [':',key,':'].join('');
  });
  return [emo, msg].join(' ').trim();
};
