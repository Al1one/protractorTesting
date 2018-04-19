import {browser, by, element} from 'protractor';

const base = require('../pageObjects/BasePage.po');
const home_page = require('../pageObjects/HomePage.po');
const OR = require('../jsons/OR.json');
const custHelp = require('../pageObjects/CustomerInformation.po');
const header = require('../pageObjects/headerComponent.po');

describe('Customer Manager login test', function () {

  it('Login as Customer', function () {

    const customerName = element(by.binding('user'));

    base.navigateToURL(OR.testsiteurl);
    const customer = home_page.loginAsCustomer();
    custHelp.selectCustomer(6);
    expect(customerName.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.fName1 + " " + OR.locators.addcustomerdetailspage.testdata.lName1);

    customerName.getText().then(text => {
      console.log('Logged user full name: ' + text);
    });

    const title = base.getPageTitle();
    expect(title).toBe('Protractor practice website - Banking App');
    browser.sleep(2000);

  });



});
