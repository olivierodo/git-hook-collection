var Utils = require('../../utils');

module.exports = function(remote, url, s) {
  var warnMsg = [
    'I\'m running the test...',
    'Keep calm and wait for the test',
    'Grab a coffe i\'m running the test...',
    'Oh you wanna push... Let me a moment to check the test',
  ],
  successMsg = [
    'Congratulations on still having most of your beautiful code',
    'I\'m so glad to push this code ^^',
    'You rocks!',
    'Come on! Fix the test!',
    'Ok... you are good, but that don\'t impress me much',
    'You deserve congratulatory words, but not a proclamation...',
    'Congratulations, dude! You have wanted to win for a while.',
    'Congratulations on doing something only ten other teams have done before',
    'I want to congratulate you, but I don\'t want to do anything dramatic, like a hug for an hour'
  ],
  errorMsg = [
    '.... you broke the test dude, there is no way that you push this piece of code',
    'Why are you doing this? Tests are important',
    'Before this nice hook, i belive that you broke the test so much',
    'Come on! Fix the test!',
    'To be honest this commit sucks... you should add more test',
  ],
  getMessage = function(list) {
    return list[Math.floor(Math.random() * list.length)]
  };
  s.warn('-> START TESTING : '+ getMessage(warnMsg));
  if (Utils.exec('npm test', true).code) {
    s.error('-> TEST KO : ' + getMessage(errorMsg));
  } else {
    s.success('-> TEST OK : ' +getMessage(successMsg));
  }
};
