import gulp from "gulp";
import babel from "gulp-babel";

import paths from "../paths.json";

gulp.task("build", ["build-lib", "build-spec"]);

gulp.task("build-lib", () => {
	return gulp.src(paths.source.lib)
		.pipe(babel())
		.pipe(gulp.dest(paths.build.directories.lib));
});

gulp.task("build-spec", () => {
	return gulp.src(paths.source.spec)
		.pipe(babel())
		.pipe(gulp.dest(paths.build.directories.spec));
});
