var expect = require('chai').expect,
sinon = require('sinon'),
fs = require('fs'),
GitHooks = require('../../src/git-hooks');

describe('#git-hooks', function() {
  var sandbox;

  beforeEach(function (done) {
    sandbox = sinon.sandbox.create();
    done();
  });

  afterEach(function(done){
    sandbox.restore();
    done()
  });

  describe('#configFile', function() {
    it('Should return the path to the .githook file', function() {
      return expect(GitHooks.configFile).to.be.equal(require('app-root-dir').get() + '/.githooks');
    });
  });

  describe('#get()', function() {


    it('Should return an empty array if the .githook is not found', function(done) {
      GitHooks.get().then(function(response) {
        expect(response).to.be.deep.equal([]);
        done();
      });
    });

    it('Should return the hooks list from .githook the good section', function(done) {
      sandbox.stub(fs, 'readFile', function (path, callback) {
        callback(null, JSON.stringify({'prepare-commit-msg':["hook1"]}));
      });
      GitHooks.get('prepare-commit-msg').then(function(response) {
        expect(response).to.be.deep.equal(['hook1']);
        done();
      });
    });

    it('Should return tan empty array if the hook section doesn\'t exist', function(done) {
      sandbox.stub(fs, 'readFile', function (path, callback) {
        callback(null, JSON.stringify({'prepare-commit-msg':["hook1"]}));
      });
      GitHooks.get('commit-msg').then(function(response) {
        expect(response).to.be.deep.equal([]);
        done();
      });
    });
  });

  describe('#run()', function() {
    it('Should run the module hook', function() {

      var result = GitHooks.run({
        type : 'commit-msg',
        name : 'emoji',
        args : ['fix my commit msg']
      });

      return expect(result).to.be.equal(':wrench: fix my commit msg');;
    });
  });
});
