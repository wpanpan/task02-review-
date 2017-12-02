var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
gulp.task('style',function(){
	gulp.src('./*.scss')
	.pipe(sass())
	.pipe(cssnano())
	.pipe(gulp.dest('./'))
});