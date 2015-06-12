import gulp from "gulp";
import mocha from "gulp-mocha";
import babel from "gulp-babel";
import chai from "chai";

const paths = {
	"source": {
		"lib": "./es6/lib/**/*.js",
		"spec": "./es6/spec/**/*.spec.js"
	},

	"build": {
		"directories": {
			"lib": "./es5/lib",
			"spec": "./es5/spec"
		},
		"spec": "./es5/spec/**/*.spec.js"
	}
};

chai.should();

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

gulp.task("test", ["build"], () => {
	return gulp.src(paths.build.spec, {read: false})
		.pipe(mocha({reporter: "spec"}));
});
