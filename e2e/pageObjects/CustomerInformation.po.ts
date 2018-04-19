import {$, browser, by, element, protractor} from 'protractor';

const SelectWrapper = require('../util/selectWrapper');
const mySelect = new SelectWrapper(by.id('userSelect'));
const currSelect = new SelectWrapper(by.id('currency'));
const OR = require('../jsons/OR.json');

const EC = protractor.ExpectedConditions;

export const CustomerInformation = function () {

  this.selectCustomer = function (customerId) {

    const loginBtn = element(by.buttonText('Login'));
    mySelect.selectByValue(customerId);
    browser.wait(EC.elementToBeClickable(loginBtn), 500);
    loginBtn.click();

    return this;

  };

  this.getCustomerInfo = function (accNum, accBal, accCurr) {

    const accountNum = element(by.binding('accountNo'));
    expect(accountNum.getText()).toBe(accNum);
    const accountBalance = element(by.binding('amount'));
    expect(accountBalance.getText()).toBe(accBal);
    const accountCurrency = element(by.binding('currency'));
    expect(accountCurrency.getText()).toBe(accCurr);

    console.log('Customer data: ' + accNum, accBal, accCurr);

  };

  this.openTransactionTable = function () {

    element(by.css('[ng-click="transactions()"]')).click();
    return this;

  };

  this.openDeposit = function () {

    element(by.css('[ng-click="deposit()"]')).click();
    expect(element(by.model('amount')).isPresent).toBeTruthy();
    const depositBtn = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[4]/div/form/button'));
    expect(depositBtn.isPresent());

    return this;

  };

  this.depositFunds = function (amount) {

    const depositField = element(by.model('amount'));
    depositField.sendKeys(amount);
    const depositBtn = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[4]/div/form/button'));
    depositBtn.click();
    const goodMsg = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[4]/div/span'));
    expect(goodMsg.getText()).toEqual('Deposit Successful');
    const accountBalance = element(by.binding('amount'));
    expect(accountBalance.getText()).toEqual(amount);

    browser.sleep(2000);

    console.log('Added amount: ' + amount);

    return this;

  };

  this.openWithdrawl = function () {

    element(by.css('[ng-click="withdrawl()"]')).click();
    expect(element(by.model('amount')).isPresent).toBeTruthy();
    const WithdrawlBtn = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[4]/div/form/button'));
    expect(WithdrawlBtn.isPresent());

    return this;

  };

  this.withdrawlFunds = function (amount) {

    const withdrawlField = element(by.model('amount'));
    withdrawlField.sendKeys(amount);
    const withdrawlBtn = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[4]/div/form/button'));
    withdrawlBtn.click();
    const transMsg = element(by.xpath('/html/body/div[3]/div/div[2]/div/div[4]/div/span'));
    expect(transMsg.getText()).toEqual('Transaction successful');

    browser.sleep(2000);

    console.log('Removed amount: ' + amount);

    return this;

  };

  const transactionTable = function () {

    const backBtn = element(by.css('[ng-click="back()"]'));
    const resetBtn = element(by.css('[ng-click="reset()"]'));



  };


};
module.exports = new CustomerInformation();
