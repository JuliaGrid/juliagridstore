'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var sourcemap = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();

gulp.task('css', function () {
    return gulp.src('source/less/style.less')
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(sourcemap.write('.'))
        .pipe(gulp.dest('source/css'));
});

gulp.task('server', function () {
    server.init({
        server: 'source/'
    });
    gulp.watch('source/less/**/*.less', gulp.series('css'));
    gulp.watch('source/*.html').on('change', server.reload);
});

gulp.task('start', gulp.series('css', 'server'));