const logger = require('../logs/log.js');
import {browser, by, element} from 'protractor';

describe('Calculator validation', function () {

  let  title;

  beforeEach(function () {

    browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
    logger.log('info', 'Navigating to the website');
    title = browser.getTitle();
  });

  it('Validate title', function () {

    title.then(function (text) {
      console.log(text);
      expect(title).toEqual('Protractor practice website - Calculator');
      logger.log('info', 'Validate the exact title');

      });
  });

  it('Validate title should not match', function () {

    title.then(function (text) {
      console.log(text);
      expect(title).not.toEqual('P1rotractor practice website - Calculator');
      logger.log('info', 'Validate the title should not match');

    });
  });

  it('Validate partial title match', function () {

    title.then(function (text) {
      console.log(text);
      expect(title).toMatch('practice website');

    });
  });
});
