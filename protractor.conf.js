exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Spec patterns are relative to the location of this config.
  specs: [
    'spec/*spec.js'
  ],

    allScriptsTimeout: 20000,

    onPrepare: function () {
        return browser.executeScript("alert('Test');").then(function () {
            browser.driver.manage().window().maximize();
            return browser.switchTo().alert().accept();
        });
    },

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {'args': ['--start-maximized']}
  },


  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: false,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 100000
  }
};
