/* eslint-disable no-undef */

module.exports = function () {
  this.Given(/^I am on the homepage$/, () => {
    return helpers.loadPage(shared.constants.url);
  });
  this.When(/^I click the glossary button in the menu$/, () => {
    return driver.findElement(by.linkText('Glossary')).then(link => {
      return link.click();
    });
  });
  this.Then(/^I should see the glossary$/, () => {
    return driver.findElement(by.css('.glossary'));
  });
};