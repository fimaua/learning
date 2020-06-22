import { findDivCount } from './findDivCount'

it('should find count of numbers which / 2', () => {
    const res = findDivCount(1, 10, 2)
    expect(res).toEqual(5)
})

it('should find count of numbers which / 3', () => {
    const res = findDivCount(1, 10, 3)
    expect(res).toEqual(3)
})

it('should find count of numbers which / 0', () => {
    const res = findDivCount(1, 10, 0)
    expect(res).toEqual(0)
})