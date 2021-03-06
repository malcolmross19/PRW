let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let babel = require("gulp-babel");



gulp.task("default", function () {
    return gulp.src("src/scripts.js")
        .pipe(babel())
        .pipe(gulp.dest("dist"));
});

gulp.task('scss', function() {
    let processors = [
        autoprefixer({ browsers: ['last 2 versions']})
    ];

    return gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream:true
        }))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});

gulp.task('watch', ['browser-sync', 'scss'], function() {
    gulp.watch('./scss/**/*.scss', ['scss']);
});