var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

var lesDist = './less/**/*.less';
var cssDist = './css';

gulp.task('less', function () {
    return gulp.src(lesDist)
        // .pipe(watch(lesDist))
        .pipe(less())
        .pipe(gulp.dest(cssDist))
        .pipe(rename({ suffix: '.min' }))
        .pipe(cssmin())
        .pipe(gulp.dest(cssDist));
});
