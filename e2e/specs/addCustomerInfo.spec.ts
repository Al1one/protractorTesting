import {browser} from 'protractor';

describe('Customer information Test', function() {


  const add_customer = require('../pageObjects/AddCustomerDetails.po');
  const baseURL = require('../pageObjects/BasePage.po');
  const OR = require('../jsons/OR.json');

  baseURL.navigateToURL('http://www.way2automation.com/angularjs-protractor/banking/#/manager/addCust');

  it('Adding Customer(s) Information', function() {

    add_customer.gotoAddCustomer();
    add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName1, OR.locators.addcustomerdetailspage.testdata.lName1, OR.locators.addcustomerdetailspage.testdata.pCode1);

    add_customer.gotoAddCustomer();
    add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName2, OR.locators.addcustomerdetailspage.testdata.lName2, OR.locators.addcustomerdetailspage.testdata.pCode2);

    add_customer.gotoAddCustomer();
    add_customer.addCustomerInfo(OR.locators.addcustomerdetailspage.testdata.fName3, OR.locators.addcustomerdetailspage.testdata.lName3, OR.locators.addcustomerdetailspage.testdata.pCode3);


  });

  it('Open Account', function() {

    add_customer.gotoOpenAccount();
    add_customer.openAccount(6, 'Dollar');

    add_customer.gotoOpenAccount();
    add_customer.openAccount(7, 'Pound');

    add_customer.gotoOpenAccount();
    add_customer.openAccount(8, 'Rupee');

  }) ;

  it('Validating record is present in table', function () {

    add_customer.gotoCustomerSearch();
    add_customer.validateCustomerRecords('Maksym');
    expect(add_customer.validateCustomerRecords.firstName.getText()).toEqual(OR.locators.addcustomerdetailspage.testdata.fName1);
    browser.sleep(2000);

  });


});
