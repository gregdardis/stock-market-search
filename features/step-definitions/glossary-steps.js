/* eslint-disable no-undef */

const glossaryElements = page.glossary.elements;

module.exports = function() {
  this.When(/^I click the glossary button in the menu$/, () => {
    return driver.findElement(by.linkText('Glossary')).then(link => {
      return link.click();
    });
  });
  this.Then(/^I should see the glossary$/, () => {
    return driver.findElement(glossaryElements.fullGlossary);
  });
};