/* eslint-disable no-undef */

const exampleSearchText = 'MSFT';
const homeElements = page.home.elements;
const invalidStockSymbol = 'ASDF';

module.exports = function() {
  this.Given(/^I click on the searchbar$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.click();
    });
  });
  this.When(/^I type text that is an invalid stock symbol$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.sendKeys(invalidStockSymbol);
    });
  });
  this.When(/^I click the search icon$/, () => {
    return driver.findElement(homeElements.searchButton).then(button => {
      return button.click();
    });
  });
  this.Then(
    /^I should see an error message that the stock was not found$/,
    () => {
      return driver.wait(until.elementLocated(homeElements.searchStatus))
        .then(status => {
          return driver.wait(until.elementTextIs(
            status,
            `No stock with symbol "${invalidStockSymbol}" was found.`
          ));
        });
    });
  this.When(/^I type text that is a valid stock symbol$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.sendKeys(exampleSearchText);
    });
  });
  this.Then(/^I should see some stock results$/, () => {
    return driver.wait(until.elementLocated(
      by.css('div.stockDataRegion'), 10000)
    ).then(() => {
      return driver.findElement(by.css('div.stockDataRegion'));
    }).then(children => {
      expect(children.length).to.not.equal(0);
    });
  });
  this.When(/^I press the Enter key$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.sendKeys(selenium.Key.ENTER);
    });
  });
  this.Given(/^there is text in the searchbar$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.sendKeys(exampleSearchText);
    });
  });
  this.When(/^I press the Escape key$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.sendKeys(selenium.Key.ESCAPE);
    });
  });
  this.Then(/^the searchbar should be cleared of all text$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return driver.wait(until.elementTextIs(search, ''));
    });
  });
};