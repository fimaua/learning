import { getSum } from './getSum'

it('should find sum of even numbers', () => {
    const res = getSum(1, 5)
    expect(res).toEqual(6)
})

it('should find sum of even numbers', () => {
    const res = getSum(1, 10)
    expect(res).toEqual(30)
})

it('should find sum of even numbers', () => {
    const res = getSum(1, 1)
    expect(res).toEqual(0)
})