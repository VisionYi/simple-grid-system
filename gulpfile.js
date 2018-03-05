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

gulp.task('sass', () =>
    gulp.src(`./src/${FILE_NAME}.scss`)
        .pipe(sass({outputStyle: 'expanded', indentWidth:4}).on('error', sass.logError))
        .pipe(gulp.dest('./dist'))
);

gulp.task('sass:watch', () => {
    gulp.watch('./src/*.scss', ['sass']);
});

gulp.task('build', ['sass'], () =>
    gulp.src(`./dist/${FILE_NAME}.css`)
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

/**
 * 使用此功能前，請先手動把 example/index.html 中引入的 grid-system.min.css 換成 grid-system.css
 * 正式發布在 Github 時再換回來
 */
gulp.task('start', ['sass', 'demo-example'], () => {
    // 修改 scss 檔案也會自動重新載入頁面
    gulp.watch('./src/*.scss', ['sass']).on('change', browserSync.reload);
});
