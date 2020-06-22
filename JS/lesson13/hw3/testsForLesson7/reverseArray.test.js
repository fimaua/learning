import { reverseArray } from './reverseArray'

it('should return reverse arr', () => {
    const res = reverseArray([1, 2, 3, 4])
    expect(res).toEqual([4, 3, 2, 1])
})

it('should return reverse arr', () => {
    const res = reverseArray([])
    expect(res).toEqual([])
})

it('should return reverse arr', () => {
    const res = reverseArray('')
    expect(res).toEqual(null)
})