var gulp = require('gulp');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoPrefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var sass = require('gulp-sass');

const FILE_NAME = 'grid-system';

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

gulp.task('build', () =>
    gulp.src(`./src/${FILE_NAME}.scss`)
        .pipe(sass({outputStyle: 'expanded', indentWidth: 4}).on('error', sass.logError))
        .pipe(gulp.dest('./example'))
        .pipe(gulp.dest('./dist'))
        .pipe(autoPrefix())
        .pipe(cleanCss())
        .pipe(getHeader())
        .pipe(rename(`${FILE_NAME}.min.css`))
        .pipe(gulp.dest('./dist'))
);

gulp.task('demo-example', () => {
    browserSync.init({
        server: './',
        startPath: './example/index.html'
    });

    gulp.watch('./example/**').on('change', browserSync.reload);
});


gulp.task('start', ['build', 'demo-example'], () => {
    // 修改 scss 檔案也會自動重新載入頁面
    gulp.watch('./src/*.scss', ['build']).on('change', browserSync.reload);
});
