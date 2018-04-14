import {browser} from 'protractor';

const base = require('../pageObjects/BasePage.po');
const add_customer = require('../pageObjects/AddCustomerDetails.po.ts');

describe('Customer Information test', function () {

  beforeEach(function () {

    browser.sleep(2000);

  });

  it('Adding customer information', function () {

    add_customer.gotoAddCustomer();
    add_customer.addCustomerInfo('Maksym', 'Dragomirov', '79032');

  });

  it('Open an Account for Customer', function () {

    add_customer.gotoOpenAccount();
    add_customer.openAccount('Maksym Dragomirov', 'Dollar');

  });

});
