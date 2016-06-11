var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

var lessDist = './src/less/**/*.less';
var cssDist = './css';

gulp.task('less', function () {
   return gulp.src(lessDist)
       .pipe(watch(lessDist))
       .pipe(less())
       .pipe(gulp.dest(cssDist))
       .pipe(cssmin())
       .pipe(rename({ suffix: '.min' }))
       .pipe(gulp.dest(cssDist))
});