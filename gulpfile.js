const gulp = require('gulp'),
      connect = require('gulp-connect'),
      uglify = require('gulp-uglify'),
      babelify = require('babelify'),
      browserify = require('browserify'),
      source = require('vinyl-source-stream'),
      
      babelOpt = {
          presets: ['env', 'react']
      },

      serverOpt = {
          name: 'Game',
          root: 'app',
          host: 'localhost',
          port: '3001',
          livereload: true
      }

gulp.task('render', () => {
    return browserify({entries: './dev/app.js'})
           .transform('babelify', babelOpt)
           .bundle()
           .pipe(source('game.min.js'))
           .pipe(gulp.dest('app/src'))
           .pipe(connect.reload());
});

gulp.task('minify', () => {
    return gulp.src('app/src/*.js')
           .pipe(uglify())
           .pipe(gulp.dest('app/src'))
})

gulp.task('html', () => {
    return gulp.src('dev/*.html')
           .pipe(gulp.dest('app'))
           .pipe(connect.reload());
});

gulp.task('css', () => {
    return gulp.src('dev/css/*.css')
           .pipe(gulp.dest('app/css'))
           .pipe(connect.reload());
});

gulp.task('build', gulp.parallel(gulp.series('render', 'minify'), 'html', 'css'));

gulp.task('server', () => {
    return connect.server(serverOpt);
});

gulp.task('watch', () => {
    gulp.watch(['dev/**/*.js'], gulp.series('render'));
    gulp.watch(['dev/*.html'], gulp.series('html'));
    gulp.watch(['dev/css/*.css'], gulp.series('css'));
});

gulp.task('default', gulp.parallel('build', 'server', 'watch'));