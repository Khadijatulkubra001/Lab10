const sum = require('./task01')
test('adds 1 + 2 equals 3', () => {
    expect (sum.sum(1, 2)).toBe(3)
})

const subtract = require('./task01')
test('subtracts 2 - 1 equals 1', () => {
    expect (subtract.subtract(2, 1)).toBe(1)
})

const multiply = require('./task01')
test('multiplies 1 * 2 equals 2', () => {
    expect (multiply.multiply(1, 2)).toBe(2)
})

const divide = require('./task01')
test('divides 2 / 1 equals 2', () => {
    expect (divide.divide(2, 1)).toBe(2)
})

test('divides 2 / 0 equals null', () => {
    expect (divide.divide(2, 0)).toBe(null)
})