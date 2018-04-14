import {$, browser, by, element} from 'protractor';

describe('Test automation of a banking app', function () {

  it('validate customer login test', function () {

    browser.get('http://way2automation.com/angularjs-protractor/banking/#/login');

    element(by.buttonText('Customer Login')).click();

    expect(browser.getTitle()).toContain('Protractor practice website');

    element.all(by.css('#userSelect option')).then(function (items) {

      //printing values from dropdown

      // console.log('-----printing values from dropdown-----');
      // console.log('Total value in dropdown are: ' + items.length);
      //
      // for (let i = 0; i < items.length; i++) {
      //   items[i].getText().then(function (text) {
      //     console.log(text);
      //   });
      // }

      element(by.model('custId')).$('[value=\'2\']').click();
      element(by.buttonText('Login')).click();

      expect(element(by.binding('user')).getText()).toEqual('Harry Potter');
      browser.sleep(3000);

    });


  });
});
