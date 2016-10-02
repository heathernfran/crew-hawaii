var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  stylus = require('gulp-stylus'),
  poststylus = require('poststylus');

gulp.task('css', function() {
  var processors = [
    autoprefixer({browsers: ['last 1 version']}),
    cssnano(),
  ];
  return gulp.src('./src/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./build'));
});

gulp.task('stylus', function() {
  gulp.src('style.styl')
    .pipe(stylus({
      use: [
        poststylus(['autoprefixer'])
      ]
    }))
    .pipe(gulp.dest('./style.css'));
});
