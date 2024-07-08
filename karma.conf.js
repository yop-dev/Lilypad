module.exports = function (config) {
  const isCI = process.env.CI === 'true';
  
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'karma-typescript'],
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
    browsers: isCI ? ['OperaGX'] : ['Opera'], // Use OperaGX in CI and Opera locally
    customLaunchers: {
      OperaGX: {
        base: 'Opera',
        flags: ['--disable-extensions', '--no-sandbox'],
        binary: 'C:/Users/desil/AppData/Local/Programs/Opera GX/launcher.exe' // Update this path as necessary
      }
    },
    singleRun: isCI,
    restartOnFileChange: true
  });
};
