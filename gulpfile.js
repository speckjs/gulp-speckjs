var gulp = require('gulp');
var speck = require('./index.js');
var rename = require('gulp-rename');
var foreach = require('gulp-foreach');
var del = require('del');
var tape = require('gulp-tape');
var eslint = require('gulp-eslint');

gulp.task('speck:tape', function() {
  return gulp.src('./test/fixtures/*.js')
    .pipe(foreach(function(stream, file) {
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

gulp.task('speck:jasmine', function() {
  return gulp.src('./test/fixtures/*.js')
    .pipe(foreach(function(stream, file) {
      return stream
        .pipe(speck({
          testFW: 'jasmine',
          logs: true
        }))
        .pipe(rename({
          suffix : '_jasmineSpec',
          dirname: 'fixtures/specs'
        }));
    }))
    .pipe(gulp.dest('./test'));
});

gulp.task('eslint', function () {
  return gulp.src(['gulpfile.js', 'index.js', 'test/specs/*_test.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('speck', ['speck:tape', 'speck:jasmine']);

gulp.task('clean', function() {
  return del('./test/fixtures/specs/*.js');
});

gulp.task('test', ['eslint', 'clean', 'speck'], function() {
  return gulp.src('test/specs/*_test.js')
    .pipe(tape());
});
