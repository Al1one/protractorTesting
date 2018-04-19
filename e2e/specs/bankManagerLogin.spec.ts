import {browser} from 'protractor';

const base = require('../pageObjects/BasePage.po');
const OR = require('../jsons/OR.json');
const header = require('../pageObjects/headerComponent.po');

describe('Bank Manager login test', function () {

  const home_page = require('../pageObjects/HomePage.po');
  it('Login as Bank Manager', function () {

    base.navigateToURL(OR.testsiteurl);
    const customer = home_page.loginAsBankManager();
    const title = base.getPageTitle();
    expect(title).toBe('Protractor practice website - Banking App');
    browser.sleep(2000);

  });

})
