var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('dist/*/*.*', {read: false})
    .pipe(clean());
});

gulp.task('build-css', function(){
  return gulp.src(['src/styles/*.*', 'node_modules/bootstrap/dist/css/bootstrap.min.css'])
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('dist/css'))
});

gulp.task('build-scripts', function () {
  return gulp.src(['node_modules/jquery/dist/jquery.min.js', 'node_modules/bootstrap/dist/js/bootstrap.min.js', 'src/js/*.*'])
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('build-images', function () {
  return gulp.src('src/images/*.*')
    .pipe(gulp.dest('dist/images'));
});

gulp.task('build-html', function () {
  return gulp.src('src/html/*.*')
    .pipe(gulp.dest('dist/'));
});

gulp.task('build-favicon', function () {
  return gulp.src('src/favicon/*.*')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', gulp.series('clean', 'build-css', 'build-scripts', 'build-images', 'build-html', 'build-favicon'));
