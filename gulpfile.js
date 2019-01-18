var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build-sass', function(){
    return gulp.src('src/scss/beckyandjoel.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('dist/css'))
});