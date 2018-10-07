Feature: Viewing the glossary
  As an stock-market-search user
  In order to understand the financial info I'm viewing for a stock
  I want to read definitions of financial terms in the glossary

  Scenario: Navigate to glossary
    Given I am on the homepage
    When I click the glossary button in the menu
    Then I should see the glossary