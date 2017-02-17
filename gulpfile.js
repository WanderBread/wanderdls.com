const gulp = require('gulp'),
      pug  = require('gulp-pug'),
      sass  = require('gulp-sass'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload;



gulp.task('pug', function () {
  return gulp.src('dev/_pugFiles/**/*.pug')
    .pipe(pug())
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('src'))
});

gulp.task('sass', function () {
  return gulp.src('dev/_sassFiles/**/*.sass')
  .pipe(sass())
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('src/css'))
});

gulp.task('js', function () {
  return gulp.src('dev/_javascript/**/*.js')
  .pipe(browserSync.reload({stream:true}))
  .pipe(gulp.dest('src/js'))
});

gulp.task('server', function () {
  browserSync.init({
    server:{
      baseDir: 'src'
    }
  });
});

gulp.task('watch', function () {
  gulp.watch('dev/-javascript/**/*.js', ['js']);
  gulp.watch('dev/_sassFiles/**/*.sass', ['sass']);
  gulp.watch('dev/_pugFiles/**/*.pug', ['pug']);
});

gulp.task('default', ['watch', 'js', 'pug', 'sass', 'server']);
