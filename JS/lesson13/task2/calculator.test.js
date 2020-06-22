import getSum, { getSquaredArray, getOddNumbers } from './calculator'

it('should get squared numbers from arr', () => {
    const res = getSquaredArray([1, 2, 3, 4])
    expect(res).toEqual([1, 4, 9, 16])
})

it('should get only odd numbers from arr', () => {
    const res = getOddNumbers([1, 2, 3, 4, 5])
    expect(res).toEqual([1, 3, 5])
})

it('should get sum of numbers', () => {
    const res = getSum(8, 4)
    expect(res).toEqual(12)
})