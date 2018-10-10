/* eslint-disable no-undef */

module.exports = function() {
  this.Given(/^I am on the homepage$/, () => {
    return helpers.loadPage(page.home.url);
  });
};