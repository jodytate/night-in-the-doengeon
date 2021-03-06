(function(){
  'use strict';

  var browserSync = require('browser-sync');
  var gulp = require('gulp');
  var reload = browserSync.reload;


  gulp.task('sass', function () {
    gulp.src('./styles/*.scss')
      .pipe(sass())
      .pipe(gulp.dest('./styles'));
  });

  gulp.task('serve', function() {
    browserSync({
      server: {
        baseDir: '.'
      }
    });
    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
  });

  gulp.task('watch', function() {
    gulp.watch('./styles/**/*.scss', ['sass']);
  });
}());

