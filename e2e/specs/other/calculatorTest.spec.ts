import {browser, by, element} from 'protractor';

describe('Calculator validation', function () {

  var  expected_text;

  beforeEach(function () {

    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    element(by.model('first')).sendKeys('7');
    element(by.model('second')).sendKeys('7');
    element(by.buttonText('Go!')).click();
    expected_text = element(by.binding('latest')).getText();

  });

  afterEach(function () {

    browser.sleep(1500);
    console.log('after each test');

  });

  it('Validate 7 + 7 = 14', function () {

    expected_text.then(function (text) {

      console.log('Result is: ' + text);
      expect(parseInt(text)).toBe(14);

    });
  });

  it('Validate 7 + 7 != 10', function () {

    expected_text.then(function (text) {

      console.log('Result is: ' + text);
      expect(parseInt(text)).not.toBe(10);

    });
  });

  it('Validate 7 + 7 = 13', function () {

    expected_text.then(function (text) {

      console.log('Result is: ' + text);
      expect(parseInt(text)).toBe(13);

    });
  });
});
