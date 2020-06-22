import { calc } from './calculator.js'

it('should get sum of numbers', () => {
    const res = calc('1 + 2')
    expect(res).toEqual("1 + 2 = 3")
})

it('should get differences of numbers', () => {
    const res = calc('1 - 2')
    expect(res).toEqual('1 - 2 = -1')
})

it('should get * of numbers', () => {
    const res = calc('1 * 2')
    expect(res).toEqual('1 * 2 = 2')
})

it('should get / of numbers', () => {
    const res = calc('1 / 2')
    expect(res).toEqual('1 / 2 = 0.5')
})

it('should get null if calc get not string', () => {
    const res = calc(1)
    expect(res).toEqual(null)
})