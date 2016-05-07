var expect = require('chai').expect,
Status = require('../../src/status'),
colors = require('colors');
sinon = require('sinon');

describe('#status', function() {
  var sandbox;

  beforeEach(function (done) {
    sandbox = sinon.sandbox.create();
    done();
  });

  afterEach(function(done){
    sandbox.restore();
    done()
  });

  describe('#error()', function() {
    it('Should Write a log in red', function(done) {
      sandbox.stub(Status, 'log', function (msg) {
        expect(msg).to.equal('my message'.red);
      });
      try{
        Status.error('my message');
      } catch (err) {
        expect(err.message).to.equal('my message');
        done();
      }
    });
  });

  describe('#warn()', function() {
    it('Should Write a log in yellow', function(done) {
      sandbox.stub(Status, 'log', function (msg) {
        expect(msg).to.equal('my message'.yellow);
        done();
      });
      Status.warn('my message');
    });
  });

  describe('#success()', function() {
    it('Should Write a log in green', function(done) {
      sandbox.stub(Status, 'log', function (msg) {
        expect(msg).to.equal('my message'.green);
        done();
      });
      Status.success('my message');
    });
  });
});

