import { When } from '@cucumber/cucumber'

When('I add {int} and {int}', function (firstNumber, secondNumber) {
  this.calculator.add(firstNumber, secondNumber)
  console.log(`Adding ${firstNumber} + ${secondNumber}`)
})

When('I subtract {int} from {int}', function (subtractNumber, fromNumber) {
  console.log(`Subtracting: ${fromNumber} - ${subtractNumber}`)
  this.calculator.subtract(fromNumber, subtractNumber)
})

When('I multiply {int} and {int}', function (firstNumber, secondNumber) {
  this.calculator.multiply(firstNumber, secondNumber)
  console.log(`Multiply: ${firstNumber} * ${secondNumber}`)
})

When('I divide {int} by {int}', function (divisorNumber, dividendNumber) {
  try {
    this.calculator.divide(divisorNumber, dividendNumber)
  } catch (error) {
    this.error = error.message
    console.log(`Divide error: ${this.error}`)
  }
})
