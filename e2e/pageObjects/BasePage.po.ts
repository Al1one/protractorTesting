import {browser} from 'protractor';

const  BasePage = function () {

  this.navigateToURL = function (url) {

    browser.get(url);

  };

  this.getPageTitle = function () {

    return browser.getTitle();

  };

};
module.exports = new BasePage();
