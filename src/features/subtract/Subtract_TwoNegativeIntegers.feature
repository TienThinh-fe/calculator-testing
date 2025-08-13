Feature: Subtract two negative numbers

  Scenario: Subtract -4 from -6
    Given I have a calculator
    When I subtract -4 from -6
    Then the result should be -2
