module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-opera-launcher'), // Opera GX launcher
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Jasmine configuration options
      },
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/app'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['OperaGX'],
    customLaunchers: {
      OperaGX: {
        base: 'Opera',
        flags: [],
        // Provide the path to Opera GX executable if necessary
        // For example, "C:/Users/YourUsername/AppData/Local/Programs/Opera GX/opera.exe"
        // Replace the path with the actual path to your Opera GX executable
        browser: "C:/Users/desil/AppData/Local/Programs/Opera GX/opera.exe"
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
