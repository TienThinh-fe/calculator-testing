Feature: Divide 2 numbers without remainder

  Scenario: Divide 5 by 0
    Given I have a calculator
    When I divide 5 by 0
    Then the error message should be "Cannot divide by zero"
