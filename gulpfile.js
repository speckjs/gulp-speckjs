var gulp = require('gulp');
var speck = require('./index.js');
var rename = require("gulp-rename");
var foreach = require('gulp-foreach');

gulp.task('speck', function() {
  return gulp.src('./test/fixtures/*.js')
    .pipe(foreach(function(stream, file){
      return stream
        .pipe(speck({
          testFW: 'tape',
          logs: true
        }))
        .pipe(rename({
          suffix : '_tapeSpec',
          dirname: 'fixtures/specs'
        }));
    }))
    .pipe(gulp.dest('./test'));
});
