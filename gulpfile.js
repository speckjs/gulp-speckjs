var gulp = require('gulp');
var speck = require('./index.js');
var rename = require("gulp-rename");

gulp.task('speck', function() {
  return gulp.src('./test/fixtures/base.js')
    .pipe(speck({
      testFW: 'tape',
      logs: true
    }))
    .pipe(gulp.dest('./test/fixtures/specs/'));
});
