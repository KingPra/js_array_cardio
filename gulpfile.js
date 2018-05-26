const gulp = require('gulp');
const sass = require('gulp-sass');
const browser = require('gulp-browser');
const strip = require('gulp-strip-comments');

gulp.task('default', ['html', 'css', 'js']);

gulp.task('html', () => {
  gulp.src('index.html')
  .pipe(strip())
  .pipe(gulp.dest('docs/'));
});

gulp.task('css', () => {
  gulp.src('style.css')
  .pipe(strip.text())
  .pipe(gulp.dest('docs/'));
});

gulp.task('js', () => {
  gulp.src('app.js')
  .pipe(strip())
  .pipe(browser.browserify())
  .pipe(gulp.dest('docs/'));
});

gulp.task('watch', ['default'], () => {
  gulp.watch('*.html', ['html']);
  gulp.watch('*.css', ['css']);
  gulp.watch('*.js', ['js']);
});
