import { When } from '@cucumber/cucumber'

When('I add {int} and {int}', function (firstNumber, secondNumber) {
  this.calculator.add(firstNumber, secondNumber)
  console.log(`Adding ${firstNumber} + ${secondNumber}`)
})
