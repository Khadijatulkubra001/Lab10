const task02 = require('./task02')
test('sum of natural numbers below 10 is 23', () => {
    expect (task02.task02(3, 5, 10)).toBe(23)
})