/* eslint-disable no-undef */

const { invalidStockSymbol } = shared.constants;

module.exports = function() {
  this.When(/^my cursor is in the searchbar$/, () => {
    return driver.findElement(by.css('.searchText')).then(search => {
      return search.click();
    });
  });
  this.Then(/^I type text that is an invalid stock symbol$/, () => {
    return driver.findElement(by.css('.searchText')).then(search => {
      return search.sendKeys(invalidStockSymbol);
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
      return driver.wait(until.elementLocated(by.css('.searchStatus')))
        .then(status => {
          return driver.wait(until.elementTextIs(
            status,
            `No stock with symbol "${invalidStockSymbol}" was found.`
          ));
        });
    });
  // TODO: add steps for valid stock search
  // TODO: add steps for search with ENTER
  // TODO: add steps for clear search text with ESC
};