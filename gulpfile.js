var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

gulp.task('build-css', function(){
  return gulp.src('src/styles/*.*')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
});

gulp.task('build-scripts', function () {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/js/*.*'])
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build-html', function () {
  return gulp.src('src/html/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series('build-css', 'build-scripts', 'build-html'));
