var gulp = require('gulp')
    ,imagemin = require('gulp-imagemin')
    ,clean = require('gulp-clean')
    ,concat = require('gulp-concat')
    ,htmlReplace = require('gulp-html-replace')
    ,uglify = require('gulp-uglify')
    ,usemin = require('gulp-usemin')
    ,cssmin = require('gulp-cssmin')
    ,jshint = require('gulp-jshint')
    ,jshintStylish = require('jshint-stylish')
    ,csslint = require('gulp-csslint');

var browserSync = require('browser-sync').create();
var taskList = require('gulp-task-listing');

// Default
gulp.task('default', ['copy'], function() {
  gulp.start('usemin');
});

// Copiar arquivos
gulp.task('copy', ['clean'], function() {
  return gulp.src('**/*')
      .pipe(gulp.dest('dist'));
});

// Clean files
gulp.task('clean', function() {
  return gulp.src('dist')
                   .pipe(clean());
});

// Concatenação de arquivos (js, css e etc...)
gulp.task('build-js', function() {
  gulp.src('dist/js/**/*.js')
      .pipe(concat('all.js')) // generate a new file named
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

// Html Replace (html)
gulp.task('build-html', function() {
  gulp.src('dist/**/index.html')
      .pipe(htmlReplace({js: 'js/all.js'}))
      .pipe(gulp.dest('dist'));
});

// Otimizar imagens
gulp.task('build-img', ['copy'], function() {
  gulp.src('dist/assets/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img'));
});


gulp.task('usemin', function() {
  gulp.src('dist/**/*/.html')
      .pipe(usemin(
        {
          'js' : [uglify],
          'css' : [cssmin]
        }))
      .pipe(gulp.dest('dist'))
});

// Injetar bibliotecas
gulp.task('inject', function() {
    var wiredep = require('wiredep').stream;
    return gulp
        .src('./index.html')
        .pipe(wiredep())
        .pipe(gulp.dest('./'));
});

// browserSync
gulp.task('server', function() {
    browserSync.init({server: {baseDir:'./'}});
    gulp.watch('./index.html').on('change', browserSync.reload);
    gulp.watch('views/**/*.html').on('change', browserSync.reload);
    gulp.watch('js/**/*.js').on('change', browserSync.reload);
    gulp.watch('assets/css/**/*.css').on('change', browserSync.reload);

    // jshint
    gulp.watch('js/**/*.js').on('change', function(event) {
            console.log("Linting " + event.path);
            gulp.src(event.path)
                .pipe(jshint())
                .pipe(jshint.reporter(jshintStylish));
        });

    // css hint
    gulp.watch('assets/css/**/*.css').on('change', function(event) {
      console.log("Linting " + event.path);
      gulp.src(event.path)
          .pipe(csslint())
          .pipe(csslint.reporter());
      });
});
