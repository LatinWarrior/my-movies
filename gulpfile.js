var gulp = require('gulp'),
    webserver = require('gulp-webserver');

gulp.task('webserver', function () {
    gulp
        .src('app')
        .pipe(webserver({
            livereload: true,
            open: true,            
            port: 3102,
            directoryListing: false
        }));
});