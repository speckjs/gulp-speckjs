var through = require('through2');
var glob = require('glob');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var speckjs = require('speckjs');
var extend = require('util')._extend;

const PLUGIN_NAME = 'gulp-speckjs';

module.exports = function(options) {

  var source;
  var defaults = {
    testFW: 'tape',
    logs: true
  };
  options = extend(defaults, options);

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
    }

    options.onBuild = function(output){
      file.contents = new Buffer(output);
      if (options.logs) {
        gutil.log(gutil.colors.green('Boom! ') + options.testFW + ' spec file compiled' );
      }
      cb(null, file);
    };

    if (file.isBuffer()) {
      try {

      source = {
        name: file.path,
        content: file.contents.toString()
      };

      speckjs.build(source, options);

      } catch(error) {
        this.emit('error', new PluginError(PLUGIN_NAME, error));
        return cb(error);
      }
    }
    if (file.isStream()) {
      var source = '';
      file.on('readable',function(buffer){
        var chunk = buffer.read().toString();
        source += chunk;
      });
      file.on('end',function(){
        try {

          source = {
            name: file.path,
            content: source
          };
          speckjs.build(source, options);

        } catch(error) {
          this.emit('error', new PluginError(PLUGIN_NAME, error));
          return cb(error);
        }
      });
    }
  });
};
