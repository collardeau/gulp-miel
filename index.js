var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var miel = require('miel');

const PLUGIN_NAME = 'gulp-miel';

var mielPlugin = function() {

  var stream = through.obj(function(file, enc, cb) {

    if(file.isNull()) { return cb(null, file); }

    if(file.isStream()){
      return cb(new PluginError('gulp-miel', 'Streaming not supported'));
    }

    if(file.isBuffer()){
      var compiled = miel(file.contents.toString());

      file.contents = new Buffer(compiled);
    }

    cb(null, file);

  });

  return stream;

};

module.exports = mielPlugin;
