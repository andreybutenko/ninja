'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp.src('./source/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./source/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./source/scss/**/*.scss', ['sass']);
});
