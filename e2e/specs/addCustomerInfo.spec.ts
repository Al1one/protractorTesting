import {browser, by, element} from 'protractor';

const add_customer = require('../pageObjects/AddCustomerDetails.po');
const baseURL = require('../pageObjects/BasePage.po');
const OR = require('../jsons/OR.json');

describe('Customer information Test', function() {

  baseURL.navigateToURL('http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust');

  it('Adding Customer(s) Information', function() {

    add_customer.gotoAddCustomer();
    add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName1, OR.locators.addcustomerdetailspage.testdata.lName1, OR.locators.addcustomerdetailspage.testdata.pCode1);

    // add_customer.gotoAddCustomer();
    // add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName2, OR.locators.addcustomerdetailspage.testdata.lName2, OR.locators.addcustomerdetailspage.testdata.pCode2);
    //
    // add_customer.gotoAddCustomer();
    // add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName3, OR.locators.addcustomerdetailspage.testdata.lName3, OR.locators.addcustomerdetailspage.testdata.pCode3);


  });

  it('Open Account', function() {

    add_customer.gotoOpenAccount();
    add_customer.openAccount(6, 'Dollar');

    // add_customer.gotoOpenAccount();
    // add_customer.openAccount(7, 'Pound');
    //
    // add_customer.gotoOpenAccount();
    // add_customer.openAccount(8, 'Rupee');

  }) ;




});

describe('Validating that record is present in table', function () {

  baseURL.navigateToURL('http://www.way2automation.com/angularjs-protractor/banking/#/manager/list');


  it('Validating that record is present in table', function () {

    const firstName = element(by.repeater('cust in Customers').row(0).column('cust.fName'));
    const lastName = element(by.repeater('cust in Customers').row(0).column('cust.lName'));
    const postCode = element(by.repeater('cust in Customers').row(0).column(2));
    const accountNumber = element(by.repeater('account in cust.accountNo').row(0).column(3));

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('Maksym', '', '', '');
    expect(firstName.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.fName1);
    browser.sleep(2000);

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('', 'Dragomirov', '', '');
    expect(lastName.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.lName1);
    browser.sleep(2000);

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('', '', '79032', '');
    expect(postCode.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.pCode1);
    browser.sleep(2000);

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('', '', '', '1016');
    expect(accountNumber.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.accountNum1);
    browser.sleep(2000);


  });

})
