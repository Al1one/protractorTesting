import {by} from 'protractor';

const customLocator = function () {

  by.addLocator('ngClick', function (toState, parentelement) {

    const using = parentelement || document;
    const prefixes = ['ng-click'];
     for (const p = 0; p < prefixes.length; ++p) {
       const selector = '*[' + prefixes[p] + '="' + toState + '"]';
       const inputs = using.querySelectorAll(selector);
       if (inputs.length) {
         return inputs;
       }
     }
  });
};

module.exports = new customLocator();
