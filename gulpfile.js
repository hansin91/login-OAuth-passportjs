'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let minify = require('gulp-clean-css');
let sourcemaps = require('gulp-sourcemaps');
let clean = require('gulp-clean');

gulp.task('clear', () => {
	gulp.src('./public/dist/styles', { read: false }).pipe(clean());
});

gulp.task('sass', [ 'clear' ], () => {
	gulp
		.src('./styles/scss/styles.scss')
		.pipe(sass())
		.pipe(sourcemaps.init())
		.pipe(minify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/dist/styles'));
});

gulp.task('watch', () => {
	gulp.watch('./styles/scss/**/*.scss', [ 'sass' ]);
});
