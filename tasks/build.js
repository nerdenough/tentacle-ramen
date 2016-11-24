const gulp = require('gulp');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');

export default function build() {
  return gulp
    .src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('bot.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
}
