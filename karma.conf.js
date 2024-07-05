module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-edge-launcher'), // Add the Edge launcher plugin
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Jasmine configuration options
      },
      clearContext: false // Leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // Removes duplicated traces
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
    logLevel: config.LOG_DEBUG, // Set log level to DEBUG
    autoWatch: true,
    browsers: ['Edge'], // Use Edge browser
    customLaunchers: {
      Edge: {
        base: 'Edge',
        flags: ['--disable-extensions'],
        binary: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe' // Path to Edge executable
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
