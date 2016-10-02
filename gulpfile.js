var gulp = require('gulp'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  precss = require('precss'),
  rename = require('gulp-rename')
  postcssimport = require('postcss-import');
  // stylus = require('gulp-stylus'),
  // poststylus = require('poststylus');

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

gulp.task('stylus', function() {
  gulp.src('style.styl')
    .pipe(stylus({
      use: [
        poststylus(['autoprefixer'])
      ]
    }))
    .pipe(gulp.dest('./style.css'));
});
