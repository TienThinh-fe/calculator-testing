Feature: Subtract 2 positive numbers

  Scenario: Subtract 15 and 10
    Given I have a calculator
    When I subtract 10 from 15
    Then the result should be 5
