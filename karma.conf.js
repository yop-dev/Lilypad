module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
    plugins: [
      require('karma-jasmine'),
      require('karma-opera-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-typescript')
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
    browsers: ['OperaGX'],
    customLaunchers: {
      OperaGX: {
        base: 'Opera',
        flags: ['--disable-extensions'],
        binary: 'C:/Users/desil/AppData/Local/Programs/Opera GX/launcher.exe' // Ensure this path is correct
      }
    },
    singleRun: false,
    restartOnFileChange: true
  });
};
