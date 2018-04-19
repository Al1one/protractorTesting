import {browser, by, element} from 'protractor';

const add_customer = require('../pageObjects/AddCustomerDetails.po');
const base = require('../pageObjects/BasePage.po');
const OR = require('../jsons/OR.json');
const header = require('../pageObjects/headerComponent.po');

describe('Customer information Test', function() {

  base.navigateToURL('http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust');

  it('Adding Customer(s) Information', function() {

    add_customer.gotoAddCustomer();
    add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName1, OR.locators.addcustomerdetailspage.testdata.lName1, OR.locators.addcustomerdetailspage.testdata.pCode1);

    // add_customer.gotoAddCustomer();
    // add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName2, OR.locators.addcustomerdetailspage.testdata.lName2, OR.locators.addcustomerdetailspage.testdata.pCode2);

    // add_customer.gotoAddCustomer();
    // add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName3, OR.locators.addcustomerdetailspage.testdata.lName3, OR.locators.addcustomerdetailspage.testdata.pCode3);

  });

  it('Open Account', function() {

    add_customer.gotoOpenAccount();
    add_customer.openAccount(6, 'Dollar');

    // add_customer.gotoOpenAccount();
    // add_customer.openAccount(7, 'Pound');

    // add_customer.gotoOpenAccount();
    // add_customer.openAccount(8, 'Rupee');

  }) ;

});

describe('Validating that record is present in table', function () {

  base.navigateToURL('http://www.way2automation.com/angularjs-protractor/banking/#/manager/list');

  it('Validating that record is present in table', function () {

    // const firstName = element(by.repeater('cust in Customers').row(0).column('cust.fName'));
    // const lastName = element(by.repeater('cust in Customers').row(0).column('cust.lName'));
    // const postCode = element(by.repeater('cust in Customers').row(0).column());
    // const accountNumber = element(by.repeater('account in cust.accountNo').row(0).column());

    const tableFull = element.all(by.css('.table'));
    const tableBody = tableFull.all(by.tagName('tbody'));
    const getRow = tableBody.all(by.tagName('tr'));
    const getCell = getRow.all(by.tagName('td'));

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('TestFname', '', '', '');
    expect((getRow.get(0) && getCell.get(0)).getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.fName1);

    getCell.get(0).getText().then(text => {
      console.log('First name: ' + text);
    });

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('', 'TestLname', '', '');
    expect((getRow.get(0) && getCell.get(1)).getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.lName1);

    getCell.get(1).getText().then(text => {
      console.log('Last name: ' + text);
    });

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('', '', '79032', '');
    expect((getRow.get(0) && getCell.get(2)).getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.pCode1);

    getCell.get(2).getText().then(text => {
      console.log('Post code: ' + text);
    });

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('', '', '', '1016');
    expect((getRow.get(0) && getCell.get(3)).getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.accountNum1);

    getCell.get(3).getText().then(text => {
      console.log('Account number: ' + text);
    });

    // add_customer.gotoCustomerSearch();
    // add_customer.validateCustomerRecords('TestFname', '', '', '');
    // expect(firstName.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.fName1);
    //
    // firstName.getText().then(text=> {
    //   console.log(text);
    // });
    //
    // browser.sleep(2000);

    // add_customer.gotoCustomerSearch();
    // add_customer.validateCustomerRecords('', 'TestLname', '', '');
    // expect(lastName.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.lName1);
    // browser.sleep(2000);
    //
    // add_customer.gotoCustomerSearch();
    // add_customer.validateCustomerRecords('', '', '79032', '');
    // expect(postCode.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.pCode1);
    // browser.sleep(2000);
    //
    // add_customer.gotoCustomerSearch();
    // add_customer.validateCustomerRecords('', '', '', '1016');
    // expect(accountNumber.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.accountNum1);
    // browser.sleep(2000);


  });

});
