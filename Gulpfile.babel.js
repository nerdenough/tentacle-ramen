import gulp from 'gulp';
import { lint, test, build, watch } from './tasks';

gulp.task('lint', lint);
gulp.task('test', ['lint'], test);
gulp.task('build', ['test'], build);
gulp.task('watch', ['build'], watch);
gulp.task('default', ['build']);
