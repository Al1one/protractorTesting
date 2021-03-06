import {browser, by, element} from 'protractor';

// require('../util/customLocator.ts');
const SelectWrapper = require('../util/selectWrapper');
const mySelect = new SelectWrapper(by.id('userSelect'));
const currSelect = new SelectWrapper(by.id('currency'));
const OR = require('../jsons/OR.json');

const AddCustomerDetails = function () {

  this.gotoAddCustomer = function () {

    element(by.css('[ng-click="addCust()"]')).click();
    return this;

  };

  this.gotoOpenAccount = function () {

    element(by.css('[ng-click="openAccount()"]')).click();
    return this;

  };

  this.gotoCustomerSearch = function () {

    element(by.css('[ng-click="showCust()"]')).click();
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

  this.openAccount = function (customerId, currencyId) {

    mySelect.selectByValue(customerId);
    currSelect.selectByValue(currencyId);
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

  this.validateCustomerRecords = function (fname, lname, pcode, accountNum) {

    const searchCustomer = element(by.model(OR.locators.customerData.searchCust)).clear();
    searchCustomer.sendKeys(fname);
    searchCustomer.sendKeys(lname);
    searchCustomer.sendKeys(pcode);
    searchCustomer.sendKeys(accountNum);

    return this;

  };

};
module.exports = new AddCustomerDetails();
