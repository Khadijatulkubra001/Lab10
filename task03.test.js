const pow = require ('./task03')
test('powers 2^3 to 8', () => {
    expect (pow.pow(2, 3)).toBe(8)
})

const round = require ('./task03')
test('rounds 2.3 to 2', () => {
    expect (round.round(2.3)).toBe(2)
})

const ceil = require ('./task03')
test('ceils 2.3 to 3', () => {
    expect (ceil.ceil(2.3)).toBe(3)
})