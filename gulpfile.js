var gulp = require('gulp');

gulp.task('copyhtml', function() {
	return gulp.src('app/**/*.+(htm|html)')
		.pipe(gulp.dest('dist/'))
});

gulp.task('copycss', function() {
	return gulp.src('app/css/**/*.css')
		.pipe(gulp.dest('dist/css/'))
});

gulp.task('copykitchsink', function() {
    return gulp.src('app/**/*')
        .pipe(gulp.dest('dist/'))
});