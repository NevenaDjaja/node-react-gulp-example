var gulp = require('gulp');
var browserify = require('browserify'); // bundle JS files
var reactify = require('reactify'); // transform react jsx into js
var source = require('vinyl-source-stream');

var paths = {
  app_js: ['./public/app.jsx']
}


gulp.task('scripts', function() {
  browserify(paths.app_js)
    .transform(reactify)
    .bundle()
    .pipe(source('bundle.js'))  // put bundle.js into src folder
    .pipe(gulp.dest('./src')); // create src folder 
});

gulp.task('watch', function() {
  gulp.watch(paths.app_js, ['scripts']);
});

gulp.task('default', ['watch','scripts']);