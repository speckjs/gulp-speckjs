var gulp = require('gulp');
var speck = require('./index.js');

gulp.task('speck', function() {
  return gulp.src('./test/fixtures/base.js')
    .pipe(speck())
    .pipe(gulp.dest('./test/fixtures/specs/'));
});
