import { Then } from '@cucumber/cucumber'
import { expect } from 'chai'

Then('the result should be {int}', function (expectedResult) {
  const actualResult = this.calculator.getResult()
  console.log(
    `Checking Expected: ${expectedResult} and Actual: ${actualResult}`,
  )
  expect(expectedResult).equal(actualResult)
})
Then('the error message should be {string}', function (expectedError) {
  const actualError = this.error
  console.log(`Checking Expected: ${expectedError} and Actual: ${actualError}`)
  expect(expectedError).equal(actualError)
})
