Feature: Add Two Negative integers
  
  Scenario: Add Negative -1 and -3
    Given I have a calculator
    When I add -1 and -3
    Then the result should be -4
    
