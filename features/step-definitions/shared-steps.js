/* eslint-disable no-undef */

const homeElements = page.home.elements;

module.exports = function() {
  this.Given(/^I am on the homepage$/, () => {
    return helpers.loadPage(page.home.url);
  });
  this.Given(/^focus is on the searchbar$/, () => {
    return driver.findElement(homeElements.searchText).then(search => {
      return search.click();
    });
  });
  this.When(/^I click the search icon$/, () => {
    return driver.findElement(homeElements.searchButton).then(button => {
      return button.click();
    });
  });
};