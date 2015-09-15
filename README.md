[![Build Status](https://travis-ci.org/speckjs/gulp-speckjs.svg?branch=master)](https://travis-ci.org/speckjs/gulp-speckjs.svg)


# gulp-speckjs

> Comment Driven Development

## Getting Started
This plugin requires Gulp `~3.9.9`

If you haven't used [Gulp](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) guide, as it explains how to create a Gulp file as well as install and use Gulp plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install gulp-speckjs --save-dev
```

Once the plugin has been installed, it may be enabled inside your gulpfile with this line of JavaScript:

```
var speck = require('gulp-speckjs');
```

## The "speck" task


### Usage Examples

```
gulp.task('speck:tape', function() {
  return gulp.src('./test/fixtures/*.js')
    .pipe(foreach(function(stream, file) {
      return stream
        .pipe(speck({
          testFW: 'tape',
          logs: true,
          relPath: '../specs/' + path.basename(file.path)
        }))
        .pipe(rename({
          suffix : '_tapeSpec'
        }));
    }))
    .pipe(gulp.dest('./test/fixtures/specs'));
});
```

### options

- `testFW`: the test suite for shich SpeckJS will build
- `relPath`: the relative path that will be used inside each spec file
- `logs`: output on console success/error messages

In the above example the `gulp-speckjs` plugin is used alongside `gulp-foreach` and `gulp-rename` for a complete control over the build pipeline. See gulp-speckjs's gulpfile.js for more examples.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Gulp](http://gulpjs.com/).
