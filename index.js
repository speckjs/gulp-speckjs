//File to hold the gulp task being called in our gulpfile
module.exports = function(file, opt){
  if (!file) {
    throw new PluginError('gulp-speckjs', 'Missing file option for gulp-speckjs');
  }
  opt = opt || {};
};
