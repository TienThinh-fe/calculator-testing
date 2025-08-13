import { Given } from '@cucumber/cucumber'
import { SimpleCalculator } from '../calculator.js'

Given('I have a calculator', function () {
  this.calculator = new SimpleCalculator()
  console.log('OK - Calculator is ready to use for testing')
})
