var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var header = require('gulp-header');
var sass = require('gulp-sass');
var postCSS = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync').create();

const FILE_NAME = 'grid-system';

/**
 * 讓發佈的主檔案加上 作者、版本、license 資訊
 */
function getHeader() {
    var pkg = require('./package.json');
    var template = [
        '/**',
        ' * <%= pkg.name %> v<%= pkg.version %> - <%= pkg.description %>',
        ' * Author - <%= pkg.author %>',
        ' * License - <%= pkg.license %>',
        ' */',
        ''
    ].join('\n');

    return header(template, {pkg: pkg});
}

/**
 * sass 預處理 + 自動加 CSS prefix + 壓縮最小化 + 加上註解標頭 + 改名稱.min
 */
gulp.task('build', () =>
    gulp.src(`./src/${FILE_NAME}.scss`)
        .pipe(sass({outputStyle: 'expanded', indentWidth: 2}).on('error', sass.logError))
        .pipe(getHeader())
        .pipe(gulp.dest('./example'))
        .pipe(postCSS([ autoprefixer() ]))
        .pipe(gulp.dest('./dist'))
        .pipe(cleanCSS())
        .pipe(getHeader())
        .pipe(rename(`${FILE_NAME}.min.css`))
        .pipe(gulp.dest('./dist'))
);

gulp.task('start', ['build'], () => {
    /* demo example */
    browserSync.init({
        server: './',
        startPath: 'example/index.html'
    });
    gulp.watch('./example/**').on('change', browserSync.reload);

    // 修改 scss 檔案也會自動重新載入頁面
    gulp.watch('./src/*.scss', ['build']).on('change', browserSync.reload);
});
