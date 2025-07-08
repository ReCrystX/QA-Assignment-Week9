Feature: Add Admin on OrangeHRM

  Scenario Outline: Adding mutliple admins
    Given I am logged in as Admin
    And I navigate to Admin page
    When I click the +Add menu
    Then I add a new admin with username "<username>" and password "<password>" with role "<role>"
    And I click the Save button
    Then I can find the newly made admin by looking up {string} on the search bar

    Examples:
      | username  | password   | role  |
      | Orange1   | orangeyum  | Admin |
      | Orange2   | orangeyuck | ESS   |
