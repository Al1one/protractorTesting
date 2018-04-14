import {browser, by, element} from 'protractor';

describe('Test entering into an input', function () {

  it('executing input box test', function () {

    browser.get('https://www.angularjs.org');
    element(by.model('yourName')).sendKeys('Max D');
    element(by.binding('yourName')).getText().then(function (text) {
      console.log(text);
    });

  });
});
