import gulp from 'gulp';
import mocha from 'gulp-mocha';
import register from 'babel-register';

export default function test() {
  return gulp
    .src('test/**/*.js')
    .pipe(mocha({
      compilers: register
    }));
}
