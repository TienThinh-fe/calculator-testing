import { Then } from '@cucumber/cucumber'
import { expect } from 'chai'

Then('the result should be {int}', function (expectedResult) {
  const actualResult = this.calculator.getResult()
  console.log(
    `Checking Expected: ${expectedResult} and Actual: ${actualResult}`,
  )
  expect(expectedResult).equal(actualResult)
})


