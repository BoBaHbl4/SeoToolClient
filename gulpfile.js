var gulp = require('gulp');
var browserSync = require("browser-sync");
var reload      = browserSync.reload;
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var print = require('gulp-print');
var rename = require('gulp-rename');
var injectPartials = require('gulp-inject-partials');


/**
 * Css minify task
 */
// gulp.task('css-build', function () {
//     var customCssStream = gulp.src([
//         './assets/layouts/layout/css/*.css',
//         '!./assets/layouts/layout/css/*.min.css'])
//         .pipe(print())
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(cleanCSS())
//         .pipe(gulp.dest('./assets/layouts/layout6/css'));
//
//     return customCssStream;
// });

/**
 * Refresh View tasks
 */
gulp.task('update-view', function() {
    gulp.src([
        './views/*.*',
        './tmpl/*.*'])
        .pipe(reload({stream:true}));
});

/**
 * Inject includes
 */
gulp.task('tmpls', function () {
    return gulp.src('./views/*.html')
        .pipe(injectPartials())
        .pipe(gulp.dest('./views'));
});

/**
 * Static Build Server
 */
gulp.task('default', ['update-view', 'tmpls'],
    function() {
    browserSync({
        server: {
            baseDir: "./"
        },
        startPath: "views/",
        notify: false
    });

    console.log('Gulp started!');

    var refreshTmpl = ['tmpls'];

    gulp.watch(['./tmpl/*.html'],refreshTmpl);
    gulp.watch(['./views/*.*']).on('change', browserSync.reload);

});

