import gulp from 'gulp';
import watch from 'gulp-watch';

export default function watchTask() {
  return watch('./src/**/*.js', () => {
    gulp.start('build');
  });
}
