module.exports = function(congig) {

    config.set({

        basePath: '',
        frameworks: ['jasmine'],
        files: [
            "bower_components/angular/angular.js",
            "bower_components/angular-mocks/angular-mocks.js",
            "app/module.js",
            "*.js"
            ],
        exclude: [],
        preprocessors: {

        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity

    });
};