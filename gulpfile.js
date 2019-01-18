var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

gulp.task('build-css', function(){
  return gulp.src('src/scss/beckyandjoel.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
});

gulp.task('build-scripts', function () {
  return gulp.src('src/js/app.js')
    .pipe(babel())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', function () {
  return gulp.src('src/html/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series('build-css', 'build-scripts', 'build-html'));
