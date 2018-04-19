import {browser, by, element} from 'protractor';

const base = require('../pageObjects/BasePage.po');
const home_page = require('../pageObjects/HomePage.po');
const OR = require('../jsons/OR.json');
const custHelp = require('../pageObjects/CustomerInformation.po');
const header = require('../pageObjects/headerComponent.po');

describe('Customer Actions Validation', function () {

  it('Validate Customer Information', function () {

    custHelp.getCustomerInfo(OR.locators.addcustomerdetailspage.testdata.accountNum1, '0', 'Dollar');

  });

  it('Validate Deposit action', function () {

    custHelp.openDeposit();
    custHelp.depositFunds('2000');

    element(by.binding('amount')).getText().then(function (text) {
      console.log('Current balance: ' + text);
    });
  });

  it('Validate Withdrawl action', function () {

    custHelp.openWithdrawl();
    custHelp.withdrawlFunds('1500');
    element(by.binding('amount')).getText().then(function (text) {
      console.log('Current balance: ' + text);
    });
  });

  it('Validate transaction history table', function () {

    const transHistory = element.all(by.repeater('tx in transactions'));

    custHelp.openTransactionTable();

    expect(transHistory.count()).toEqual(2);

    transHistory.getText().then(function (text) {
      console.log(text);
    });

  });

  it('Logout action', function () {

    header.logoutBtn();
    element(by.className('btn logout')).isDisplayed().then(function (isDisplaying) {
      expect(isDisplaying).toBe(false);
    });

  });

  it('Home action', function () {

    header.homePageBtn();
    expect(element(by.css('[ng-click="customer()"]')).isPresent).toBeTruthy();
    expect(element(by.css('[ng-click="manager()"]')).isPresent).toBeTruthy();

  });
});
