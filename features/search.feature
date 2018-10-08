Feature: Search for a stock
  As a stock-market-search user
  In order to be informed about a company's stock and financial situation
  I want to search for the company's stock and see associated financial data

  Scenario: Search for invalid stock
    Given I am on the homepage
    And my cursor is in the searchbar
    When I type text that is an invalid stock symbol
    And I press ENTER to search
    Then I should see an error message that the stock was not found

  # TODO: add scenario for valid stock search

  # TODO: add scenario for search with ENTER

  # TODO: add scenario for clear search text with ESC