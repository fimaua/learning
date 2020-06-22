import { compareSums } from './compareSums'

it('should find differences of sums', () => {
    const res = compareSums(1, 2, 3, 4)
    expect(res).toEqual(false)
})

it('should find differences of sums', () => {
    const res = compareSums(4, 3, 2, 1)
    expect(res).toEqual(false)
})

it('should find differences of sums', () => {
    const res = compareSums(2, 4, 3, 4)
    expect(res).toEqual(true)
})