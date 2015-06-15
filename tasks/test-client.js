var gulp = require("gulp");
var karma = require("karma").server;

gulp.task("test-client", function (done) {
	if (process.env.TRAVIS_BUILD_NUMBER) {
		if (process.env.TRAVIS_JOB_NUMBER === `${process.env.TRAVIS_BUILD_NUMBER}.1`) {
			runKarma(done);
		}
	} else {
		runKarma(done);
	}
});

function runKarma(done) {
	karma.start({
		configFile: __dirname + "/../.karma.conf.js",
		singleRun: true
	}, done);
}
