import {browser, by, element} from 'protractor';

require('../util/customLocator.ts');
const SelectWrapper = require('../util/selectWrapper');
const mySelect = new SelectWrapper(by.id('userSelect'));
const currSelect = new SelectWrapper(by.id('currency'));
const OR = require('../jsons/OR.json');

const AddCustomerDetails = function () {

  this.gotoAddCustomer = function () {

    element(by.ngClick(OR.locators.addcustomerdetailspage.addcustomerbutton)).click();
    return this;

  };

  this.gotoOpenAccount = function () {

    element(by.ngClick(OR.locators.addcustomerdetailspage.openAccount)).click();
    return this;

  };

  this.gotoCustomerSearch = function () {

    element(by.buttonText('Customers')).click();
    return this;

  };

  this.addCustomerInfo = function (fname, lname, postcode) {

    element(by.model(OR.locators.addcustomerdetailspage.fName)).sendKeys(fname);
    element(by.model(OR.locators.addcustomerdetailspage.lName)).sendKeys(lname);
    element(by.model(OR.locators.addcustomerdetailspage.pCode)).sendKeys(postcode);
    element(by.css(OR.locators.addcustomerdetailspage.addcustomer)).click();
    browser.sleep(2000);

    const alertDialog = browser.switchTo().alert();
    alertDialog.getText().then(function (text) {
      console.log(text);
    });

    alertDialog.accept();
    browser.sleep(2000);

    return this;

  };

  this.openAccount = function (customer, currency) {

    mySelect.selectByText(customer);
    currSelect.selectByText(currency);
    element(by.buttonText('Process')).click();
    browser.sleep(2000);

    const alertDialog = browser.switchTo().alert();
    alertDialog.getText().then(function (text) {
      console.log(text);
    });

    alertDialog.accept();
    browser.sleep(2000);

    return this;

  };

  this.validateCustomerRecords = function () {

    element(by.model('searchCustomer')).sendKeys('Maksym');
    const firstName = element(by.repeater('cust in Customers').row(0).column('cust.fName'));

    firstName.getText().then(function (text) {
      console.log(text);
    });

    expect(firstName.getText()).toEqual('Maksym');
    browser.sleep(2000);

    return this;

  };

};
module.exports = new AddCustomerDetails();
