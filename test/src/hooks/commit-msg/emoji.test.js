var expect = require('chai').expect,
Emoji = require('../../../../src/hooks/commit-msg/emoji');

describe('#hooks/emoji', function() {
  it('Should return the same message if any word match', function() {
    return expect(Emoji('test')).to.be.equal('test');
  });

  it('Should return the same message with an emoji at the begining if the first word match', function() {
    return expect(Emoji('fix the test')).to.be.equal(':wrench: fix the test');
  });

  it('Should return the same message without an emoji at the begining if the first word does\'nt match', function() {
    return expect(Emoji('I fix the test')).to.be.equal('I fix the test');
  });
});

