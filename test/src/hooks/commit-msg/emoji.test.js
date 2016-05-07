var expect = require('chai').expect,
Emoji = require('../../../../src/hooks/commit-msg/emoji');

describe('#hooks/emoji', function() {
  it('Should return the same message if any word match', function() {
    return expect(Emoji('my test')).to.be.equal('my test');
  });

  it('Should return the same message with an emoji at the begining if the first word match', function() {
    return expect(Emoji('fix the test')).to.be.equal(':wrench: fix the test');
  });

  it('Should return the same message without an emoji at the begining if the first word does\'nt match', function() {
    return expect(Emoji('I fix the test')).to.be.equal('I fix the test');
  });

  it('Should return the fix emoji', function() {
    return expect(Emoji('fix the test')).to.be.equal(':wrench: fix the test');
  });

  it('Should return the add emoji', function() {
    return expect(Emoji('add test')).to.be.equal(':gift: add test');
  });

  it('Should return the improve emoji', function() {
    return expect(Emoji('improve test')).to.be.equal(':lipstick: improve test');
  });

  it('Should return the doc  emoji', function() {
    return expect(Emoji('doc test')).to.be.equal(':memo: doc test');
  });

  it('Should return the write  emoji', function() {
    return expect(Emoji('write test')).to.be.equal(':memo: write test');
  });

  it('Should return the remove  emoji', function() {
    return expect(Emoji('remove test')).to.be.equal(':fire: remove test');
  });

  it('Should return the secure  emoji', function() {
    return expect(Emoji('secure test')).to.be.equal(':lock: secure test');
  });

  it('Should return the upgrading emoji', function() {
    return expect(Emoji('upgrading test')).to.be.equal(':arrow_up: upgrading test');
  });

  it('Should return the downgrading emoji', function() {
    return expect(Emoji('downgrading test')).to.be.equal(':arrow_down: downgrading test');
  });

  it('Should return the conflict emoji', function() {
    return expect(Emoji('conflict test')).to.be.equal(':boom: conflict test');
  });

  it('Should return the added emoji', function() {
    return expect(Emoji('added')).to.be.equal(':gift: added');
  });

  it('Should return the test emoji', function() {
    return expect(Emoji('test')).to.be.equal(':white_check_mark: test');
  });

  it('Should return the merge emoji', function() {
    return expect(Emoji('merge test')).to.be.equal(':seedling: merge test');
  });

  it('Should return the refactor emoji', function() {
    return expect(Emoji('refactor test')).to.be.equal(':sunglasses: refactor test');
  });

  it('Should return the update emoji', function() {
    return expect(Emoji('update test')).to.be.equal(':muscle: update test');
  });

  it('Should return the updated emoji', function() {
    return expect(Emoji('updated test')).to.be.equal(':muscle: updated test');
  });

  it('Should return the change emoji', function() {
    return expect(Emoji('change test')).to.be.equal(':muscle: change test');
  });

  it('Should return the patch emoji', function() {
    return expect(Emoji('patch test')).to.be.equal(':gift_heart: patch test');
  });

  it('Should return the revert emoji', function() {
    return expect(Emoji('revert test')).to.be.equal(':back: revert test');
  });

  it('Should return the stop emoji', function() {
    return expect(Emoji('stop test')).to.be.equal(':bangbang: stop test');
  });

  it('Should return the perf emoji', function() {
    return expect(Emoji('perf test')).to.be.equal(':racehorse: perf test');
  });

  it('Should return the missing emoji', function() {
    return expect(Emoji('missing test')).to.be.equal(':ghost: missing test');
  });
  
  it('Should return the linking emoji', function() {
    return expect(Emoji('linking test')).to.be.equal(':link: linking test');
  });
  
  it('Should return the link emoji', function() {
    return expect(Emoji('link test')).to.be.equal(':link: link test');
  });

  it('Should return the move emoji', function() {
    return expect(Emoji('move test')).to.be.equal(':rocket: move test');
  });

  it('Should return the moving emoji', function() {
    return expect(Emoji('moving test')).to.be.equal(':rocket: moving test');
  });
});

