var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  webpack = require('gulp-webpack'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  console.log(arguments)
  gulp.src('./public/stylesheets/*.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/stylesheets'))
    .pipe(livereload());
});

gulp.task('webpack', function() {
  gulp.src('src/app.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
  gulp.watch('./public/stylesheets/*.sass', ['sass']);
});

gulp.task('develop', function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js jade coffee',
    stdout: false
  }).on('readable', function () {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'sass',
  'webpack',
  'develop',
  'watch'
]);
