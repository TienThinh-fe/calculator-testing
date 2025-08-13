Feature: Divide 2 numbers without remainder

  Scenario: Divide 10 by 2
    Given I have a calculator
    When I divide 10 by 2
    Then the result should be 5
