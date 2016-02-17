var gulp = require("gulp"),
    browserSync = require('browser-sync');
    modernizr = require('gulp-modernizr');
    concatCss = require('gulp-concat-css');


gulp.task('modernizr', function() {
  gulp.src('app/js/*.js')
    .pipe(modernizr(
              {
                  //Options
                  "options" : [
                        "setClasses",
                        "html5shiv"
                  ],

                  //Tests
                  "tests" : ['placeholder', 'cssanimations'],

                  //Sborka
                  "uglify" :true,
              }
          ))
    .pipe(gulp.dest("app/js/vendor"))
})

// Сервер
gulp.task('server', function () {  
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app'
    }
  });
});

// Слежка
gulp.task('watch', function () {
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.css'
  ]).on('change', browserSync.reload);
});

// Конкатенация CSS
gulp.task('concatCss', function () {
  return gulp.src('app/**/*.css')
      .pipe(concatCss('fullstyle.css'))
      .pipe(gulp.dest('app/css/'));
})

// Задача по-умолчанию
gulp.task('default', ['modernizr','server', 'watch']);