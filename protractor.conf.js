// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/specs/bankManagerLogin.spec.ts',
    './e2e/specs/addCustomerInfo.spec.ts',
    './e2e/specs/customerLogin.spec.ts',
    './e2e/specs/customerActionValidation.spec.ts'
  ],
  suites: {
    functional: ['./e2e/specs/functional/**.spec.ts'],
    regression: ['./e2e/specs/regression/**.spec.ts'],
    smoke: ['./e2e/specs/smoke/**.spec.ts'],
    all: ['./e2e/specs/*/**.spec.ts'],
    selected: []
  },
  capabilities: {
    'browserName': 'chrome'
  },
  //directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {

    browser.driver.manage().timeouts().implicitlyWait(10000);

    require('ts-node').register({
      project: 'e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
