import gulp from 'gulp';
import gutil, { PluginError } from 'gulp-util';
import sass from 'gulp-sass';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';

import assign from 'object-assign';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';

import del from 'del';

gulp.task('copy', () => {
  return gulp.src(['src/index.html'])
    .pipe(gulp.dest('public'));
});

gulp.task('copy:components', () => {
  return gulp.src([ 'src/components/**/*.html', 'src/components/**/*.js'])
    .pipe(gulp.dest('public/components'));
});

gulp.task('copy:layouts', () => {
  return gulp.src(['src/layouts/**'])
    .pipe(gulp.dest('public/layouts'));
});

gulp.task('copy:css', () => {
  return gulp.src(['src/assets/main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('public'));
});

gulp.task('copy:pages', () => {
  return gulp.src(['src/pages/**'])
    .pipe(gulp.dest('public/pages'));
})

gulp.task('copy:images', () => {
  return gulp.src(['src/assets/img/**'])
    .pipe(gulp.dest('public/img/'));
})

gulp.task('build', ['copy', 'copy:components', 'copy:layouts', 'copy:css', 'copy:pages', 'copy:images'], () => {
  const b = browserify('src/index.js', { debug: true })
    .transform(babelify);
  return bundle(b);
});

gulp.task('watch', () => {
  const b = browserify('src/index.js', assign({ debug: true }, watchify.args))
    .transform(babelify);
  const w = watchify(b)
    .on('update', () => bundle(w))
    .on('log', gutil.log);
  return bundle(w)
});

gulp.task('clean', () => {
  return del('public');
});

gulp.task('default', ['copy', 'watch']);

function bundle(b) {
  return b.bundle()
    .on('error', (e) => {
      console.error(e.stack);
    })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('public'));
}
