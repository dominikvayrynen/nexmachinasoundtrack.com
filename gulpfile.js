var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var livereload = require('gulp-livereload');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');

var sassPaths = [
  'bower_components/foundation-sites/scss',
  'bower_components/motion-ui/src'
];

var jsPaths = [
  // 'bower_components/jquery/dist/jquery.js',
  'bower_components/what-input/what-input.js',
  'bower_components/foundation-sites/dist/foundation.js',
  'bower_components/Scrollify/jquery.scrollify.js',
  'bower_components/smoothstate/jquery.smoothState.min.js',
  'scripts/app.js'
];

gulp.task('sass', function() {
  return gulp.src('scss/app.scss')
    .pipe($.sass({
      includePaths: sassPaths
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
    .pipe(livereload());
});

gulp.task('scripts', function() {
  return gulp.src(jsPaths)
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    // .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['scripts/app.js'], ['scripts']);
});

gulp.task('default', ['sass', 'scripts', 'watch']);
