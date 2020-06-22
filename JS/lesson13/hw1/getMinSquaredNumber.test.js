import { getMinSquaredNumber } from './getMinSquaredNumber.js'


it('should get min squared number from arr', () => {
    const res = getMinSquaredNumber([-777, 3, -2, 6, 45, -20])
    expect(res).toEqual(4)
})

it('should get null if arr not Array', () => {
    const res1 = getMinSquaredNumber('-777, 3, -2, 6, 45, -20')
    expect(res1).toEqual(null)
})

it('should get null if arr is empty', () => {
    const res2 = getMinSquaredNumber([])
    expect(res2).toEqual(null)
})