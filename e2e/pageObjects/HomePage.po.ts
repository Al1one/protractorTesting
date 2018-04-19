import {by, element} from 'protractor';

const HomePage = function () {

  this.loginAsCustomer = function () {

    element(by.css('[ng-click="customer()"]')).click();
    return require('./CustomerInformation.po');

  };

  this.loginAsBankManager = function () {

    element(by.css('[ng-click="manager()"]')).click();
    return require('./AddCustomerDetails.po');

  };

};
module.exports = new HomePage();
