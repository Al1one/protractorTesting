import {by, element} from 'protractor';

require('../util/customLocator');

const HomePage = function () {

  this.loginAsCustomer = function () {

    element(by.buttonText('Customer Login')).click();

  };

  this.loginAsBankManager = function () {

    element(by.ngClick('manager()')).click();
    return require('./AddCustomerDetails.po');

  };

};
module.exports = new HomePage();
