var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoPrefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');

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

gulp.task('default', function () {
    return gulp.src('./dist/grid-system.css')
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

