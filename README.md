[![Build Status](https://travis-ci.org/speckjs/grunt-speckjs.svg?branch=master)](https://travis-ci.org/speckjs/gulp-speckjs)

# gulp-speck

> Tiny specs, great tests

## Getting Started
This plugin requires Gulp `~3.9.9`

If you haven't used [Gulp](http://gulpjs.com/) before, be sure to check out the [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) guide, as it explains how to create a Gulp file as well as install and use Gulp plugins. Once you're familiar with that process, you may install this plugin with this command:

```
npm install gulp-speck --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```
gulp.loadNpmTasks('grunt-speck');
```

## The "speck" task


### Usage Examples

#### Single Task Setup Example

In this example, the default options are to specify a target with src files, specType, and an output destination. SpeckJS will search for comments in the source files, and then output specfiles for the specified test suite.


#### Multi Task Setup Example

You can also setup SpeckJS in multitask mode, for example if you would like to have a different subtask for bulding tape test and one for jasmine tests as in the following example:

### options

- `testFW`: the test suite for shich SpeckJS will build.
- `specName`: the file name output of the spec files `<originalfilename><specName>.js`
- `logs`: output on console success/error messages

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
