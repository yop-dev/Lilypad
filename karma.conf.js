module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'], // Added karma-typescript
    plugins: [
      require('karma-jasmine'),
      require('karma-opera-launcher'), // Add the Opera GX launcher plugin
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-typescript') // Add karma-typescript plugin for handling TypeScript files
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
    browsers: ['OperaGX'], // Use Opera GX browser
    customLaunchers: {
      OperaGX: {
        base: 'Opera',
        flags: ['--disable-extensions'],
        binary: 'C:/Program Files/Opera GX/launcher.exe' // Path to Opera GX executable (update if necessary)
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
