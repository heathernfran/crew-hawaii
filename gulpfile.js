var autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  postcssimport = require('postcss-import');
  precss = require('precss'),
  rename = require('gulp-rename'),
  sourcemaps = require('gulp-sourcemaps');

gulp.task('css', function() {
  var processors = [
    precss(),
    postcssimport(),
    autoprefixer({browsers: ['last 1 version']}),
    cssnano(),
  ];
  return gulp.src(['src/css/*.css', '*.css'])
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('.'));
});
