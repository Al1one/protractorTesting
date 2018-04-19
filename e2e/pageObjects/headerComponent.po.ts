import {by, element} from 'protractor';

const Header = function () {

  this.homePageBtn = function () {

    element(by.css('[ng-click="home()"]')).click();
    return require('../pageObjects/HomePage.po');

  };

  this.mainHeading = function () {

    const heading = element(by.className('mainHeading'));
    expect(heading.getText()).toEqual('XYZ Bank');

  };

  this.logoutBtn = function () {

    element(by.css('[ng-click="byebye()"]')).click();
    return require('../pageObjects/CustomerInformation.po');

  };

};
module.exports = new Header();
