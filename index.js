//File to hold the gulp task being called in our gulpfile
var gutil = require('gulp-util');
var through = require('through2');
// var glob = require('glob');
var gutil = require('gulp-util');
var path = require('path');
var PluginError = gutil.PluginError;
var speck = require('speckjs');

//pass files and options into function
module.exports = function(options){
//Need to add some kind of options or default options logic
var defOption;
options = options || defOption;
var files = [];
var stream = through.obj(function (file, enc, cb) {
    if (file.isNull()) {
      cb(null, file);
      return;
    }
    if (file.isStream()) {
      cb(new gutil.PluginError('gulp-speckjs', 'Streaming not supported'));
      return;
    }
    //Grab each file
    //Run speckbuild on each file -- foreach?
    //Write string produced from that to a file with file name as origin file + w/e is in options
  });
return stream;
};
