var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('build-sass', function(){
    return gulp.src('src/scss/beckyandjoel.scss')
        .pipe(sass()) // Using gulp-sass
        .pipe(gulp.dest('dist/css'))
});

gulp.task('build-scripts', function () {
  return gulp.src('src/js/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});
