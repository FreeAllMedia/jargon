// Karma configuration
// Generated on Sat Jun 13 2015 13:23:14 GMT-0600 (MDT)

var customLaunchers = {
    "sl_chrome": {
        base: "SauceLabs",
        browserName: "chrome",
        platform: "Windows 7",
        version: "35"
    },
    "sl_firefox": {
        base: "SauceLabs",
        browserName: "firefox",
        version: "30"
    },
    "sl_ios_safari": {
        base: "SauceLabs",
        browserName: "iphone",
        platform: "OS X 10.9",
        version: "7.1"
    },
    "sl_ie_11": {
        base: "SauceLabs",
        browserName: "internet explorer",
        platform: "Windows 8.1",
        version: "11"
    }
};

module.exports = function(config) {

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["browserify", "mocha", "chai"], // "detectBrowsers"],


    // list of files / patterns to load in the browser
    files: [
      "node_modules/babel/polyfill.js",
      "es5/**/*.js"
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
        "node_modules/babel/polyfill.js": ["browserify"],
        "es5/**/*.js": ["browserify"]
    },

    browserify: {
      debug: true
    },

    sauceLabs: {
        testName: "Jargon.js Unit Tests",
        username: "fam-operations",
        accessKey: "b54ca685-f4fc-4498-87c0-05ac3123e44d"
    },

    customLaunchers: customLaunchers,

    // test results reporter to use
    // possible values: "dots", "progress"
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "saucelabs"],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: Object.keys(customLaunchers), // "Chrome", "Firefox", "Safari", "Opera", "IE"],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
