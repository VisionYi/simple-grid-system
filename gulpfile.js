var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoPrefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var sass = require('gulp-sass');

function getHeader() {
    var pkg = require('./package.json');
    var template = [
        '/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @author <%= pkg.author %>',
        ' * @version v<%= pkg.version %>',
        ' * @license <%= pkg.license %>',
        ' */',
        ''
    ].join('\n');

    return header(template, {pkg: pkg});
}

gulp.task('sass', function () {
    return gulp.src('./src/*.scss')
            .pipe(sass({outputStyle: 'expanded', indentWidth:4}).on('error', sass.logError))
            .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('default', function () {
    return gulp.src('./src/grid-system.scss')
            .pipe(sass({outputStyle: 'expanded', indentWidth: 4}).on('error', sass.logError))
            .pipe(gulp.dest('./dist'))
            .pipe(autoPrefix())
            .pipe(cleanCss())
            .pipe(getHeader())
            .pipe(rename('grid-system.min.css'))
            .pipe(gulp.dest('./dist'));
});

gulp.task('demo', function () {
    browserSync.init({
        server: './',
        startPath: './example/index.html'
    });

    gulp.watch("./example/**").on('change', browserSync.reload);
});

