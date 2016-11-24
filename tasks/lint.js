import gulp from 'gulp';
import eslint from 'gulp-eslint';

export default function lint() {
  console.log('hi');
  return gulp
    .src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format());
}
