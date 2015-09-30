var gulp = require('gulp');
var browserify = require('browserify'); // bundle JS files
var reactify = require('reactify'); // transform react jsx into js
var source = require('vinyl-source-stream');

gulp.task('scripts', function() {
  browserify('./public/app.jsx')
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))  // put bundle.js into src folder
    .pipe(gulp.dest('./src')); // create src folder 
});

gulp.task('default', ['scripts']);