/* eslint-disable no-undef */

module.exports = function () {
  this.Given(/^I am on the homepage$/, () => {
    // TODO
    return helpers.loadPage(shared.constants.url).then(() => {

    });
  });
  this.When(/^I click the glossary button in the menu$/, () => {
    // TODO
  });
  this.Then(/^I should see the glossary$/, function () {
    // TODO
  });
};