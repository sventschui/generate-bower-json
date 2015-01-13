var generateBowerJson = require('../lib/index');

var should = require('should');

describe('generate-bower-json', function() {

  it('should generate a bower.json like object', function() {
    var npm = {
      name: 'foobar',
      version: '1.0.0',
      main: 'foo/bar.js',
      ignore: ['TODO'],
      keywords: ['foo','bar','baz'],
      private: true
    }


    var bower = generateBowerJson(npm);

    bower.should.have.property('name', 'foobar');
    bower.should.have.property('version', '1.0.0');
    bower.should.have.property('main', 'foo/bar.js');
    bower.should.have.property('ignore', [ 'currently not supported' ]);
    bower.should.have.property('keywords', ['foo','bar','baz']);
    bower.should.have.property('private', true);
  });

  it('should generate a minimal bower.json like object', function() {
    var npm = {
      name: 'foobar',
      version: '1.0.0'
    }


    var bower = generateBowerJson(npm);

    bower.should.have.property('name', 'foobar');
    bower.should.have.property('version', '1.0.0');
    bower.should.not.have.property('main');
    bower.should.have.property('ignore', [ 'currently not supported' ]);
    bower.should.not.have.property('keywords');
    bower.should.not.have.property('private');
  });

  it('should require a name', function() {

    var npm = {
      version: '1.0.0',
      main: 'foo/bar.js',
      ignore: ['TODO'],
      keywords: ['foo','bar','baz'],
      private: true
    }

    generateBowerJson.bind(null, npm).should.throw(/name property/)

  });

  it('should require a version', function() {

    var npm = {
      name: 'foobar',
      main: 'foo/bar.js',
      ignore: ['TODO'],
      keywords: ['foo','bar','baz'],
      private: true
    }

    generateBowerJson.bind(null, npm).should.throw(/version property/)

  });

});
