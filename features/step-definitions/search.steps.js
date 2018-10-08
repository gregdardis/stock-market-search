/* eslint-disable no-undef */

module.exports = function() {
  this.When(/^my cursor is in the searchbar$/, () => {
    return driver.findElement(by.css('.searchText')).then(search => {
      return search.click();
    });
  });
  this.Then(/^I type text that is an invalid stock symbol$/, () => {
    return driver.findElement(by.css('.searchText')).then(search => {
      return search.sendKeys('ASDF');
    });
  });
  this.Then(/^I press ENTER to search$/, () => {
    return driver.findElement(by.css('.searchButton')).then(button => {
      return button.click();
    });
  });
  this.Then(
    /^I should see an error message that the stock was not found$/,
    () => {
      return driver.wait(until.elementLocated(by.css('.error')));
    });
};