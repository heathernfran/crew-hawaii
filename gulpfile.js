'use strict';

var autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  gulp = require('gulp'),
  livereload = require('gulp-livereload'),
  postcss = require('gulp-postcss'),
  postcssimport = require('postcss-import'),
  precss = require('precss'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('default', ['css']);

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['src/css/*.css', '*.css'], ['css']);
});

gulp.task('css', function() {
  var processors = [
    precss(),
    postcssimport(),
    autoprefixer({browsers: ['last 1 version']}),
    cssnano(),
  ];
  return gulp.src(['src/css/*.css'])
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('.'))
    .pipe(livereload());
});
