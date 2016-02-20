var gulp = require("gulp"),
    browserSync = require('browser-sync'),
    modernizr = require('gulp-modernizr'),
    concatCss = require('gulp-concat-css'),
    wiredep = require('wiredep').stream,
    rimraf = require('gulp-rimraf'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css');


// Следим за bower

gulp.task('wiredep', function () {
  gulp.src('app/*.html')
      .pipe(wiredep())
      .pipe(gulp.dest('app/'));
})


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
  gulp.watch('bower.json', ['wiredep'])
});

// Конкатенация CSS
gulp.task('concatCss', function () {
  return gulp.src('app/**/*.css')
      .pipe(concatCss('fullstyle.css'))
      .pipe(gulp.dest('app/css/'));
})

// Сборка
// Переносим HTML, CSS, JS в папку dist
gulp.task('useref,' function () {
  return gulp.src('app/*.html')
    .pipe(useref())
    .gulp(gulpif('*.js', uglify()))
    .pipe(gulpif('*.css', minifyCss({compatibility: 'ie8'})))
    .pipe(gulp.dest('dist'));
})

//Очистка
gulp.task('clean', function() {
  return gulp.src('dist', {read: false}) // much faster
  .pipe(rimraf());
})

// Задача по-умолчанию
gulp.task('default', ['modernizr','server', 'watch']);