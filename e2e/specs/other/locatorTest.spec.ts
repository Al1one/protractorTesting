import {browser, by, element} from 'protractor';

let ng_click = require('../locators/customLocator');

describe('Angular Home Test', function () {

  it('ngClick locator works', function () {

    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');

    element(by.model('Auth.user.name')).sendKeys('angular');
    element(by.model('Auth.user.password')).sendKeys('password');

    element(by.model('model[options.key]')).sendKeys('Harry');

    element(by.ngClick('Auth.login()')).click();
      browser.sleep(2000);

  });

});
