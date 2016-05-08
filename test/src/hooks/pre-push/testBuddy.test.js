var expect = require('chai').expect,
sinon = require('sinon'),
child = require('child_process'),
TestBuddy = require('../../../../src/hooks/pre-push/testBuddy');
Status = require('../../../../src/status');
Utils = require('../../../../src/utils');

describe('#hooks/pre-push/test', function() {

  beforeEach(function (done) {
    sandbox = sinon.sandbox.create();
    done();
  });

  afterEach(function(done){
    sandbox.restore();
    done()
  });

  it('Should show the starting message', function(done) {
    sandbox.stub(Utils, 'exec', function(cmd, silent) {
      return {code:1};
    });
    var warn = function(msg) {
      expect(msg).to.contain('-> START TESTING');
      done();
    };
    TestBuddy('remote', 'url', {warn  : warn, error : sinon.stub(), success : sinon.stub()});
  });

  it('Should show the success nessage if the tests are ok', function(done) {
    sandbox.stub(Utils, 'exec', function(cmd, silent) {
      return {code:0};
    });
    var succ = function(msg) {
      expect(msg).to.contain('-> TEST OK');
      done();
    };
    TestBuddy('remote', 'url', {warn  : sinon.stub(), error : sinon.stub(), success : succ});
  });

  it('Should Throw an error cause the test failed', function(done) {
    sandbox.stub(Utils, 'exec', function(cmd, silent) {
      return {code:1};
    });
    var err = function(msg) {
      expect(msg).to.contain('-> TEST KO');
      done();
    };
    TestBuddy('remote', 'url', {warn  : sinon.stub(), error : err, success : sinon.stub()});
  });
});

