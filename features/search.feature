Feature: Search for a stock
  As a stock-market-search user
  In order to be informed about a company's stock and financial situation
  I want to search for the company's stock and see associated financial data

  Scenario: Search for an invalid stock
    Given I am on the homepage
    And focus is on the searchbar
    When I type text that is an invalid stock symbol
    And I click the search icon
    Then I should see an error message that the stock was not found

  Scenario: Search for a valid stock
    Given I am on the homepage
    And focus is on the searchbar
    When I type text that is a valid stock symbol
    And I click the search icon
  #   Then I should get a stock back?

  # TODO: add scenario for search with ENTER

  Scenario: Clear Search input text with Escape key
    Given I am on the homepage
    And focus is on the searchbar
    And there is text in the searchbar
    When I press Escape
    Then the searchbar should be cleared of all text