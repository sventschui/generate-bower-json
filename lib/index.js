var fs = require('fs');

module.exports = function(npm) {
  var bower = {};

  // name
  if(isEmpty(npm.name)) {
    throw new Error('The name property of the package.json like object must not be undefined, null or empty string');
  }

  bower.name = npm.name;

  // version
  if(isEmpty(npm.version)) {
    throw new Error('The version property of the package.json like object must not be undefined, null or empty string');
  }

  bower.version = npm.version;

  // ignore
  // TODO: implement
  var ignore = ['currently not supported'];

  if(ignore !== undefined) {
    bower.ignore = ignore;
  }

  // main, keywords, private
  var keys = ['main', 'keywords', 'private'];
  for(i in keys) {
    var key = keys[i];

    if(!isEmpty(npm[key])) {
      bower[key] = npm[key];
    }

  }

  return bower;

}

function isEmpty(s) {
  return s == undefined || s == null || s == '' || s.length == 0;
}
