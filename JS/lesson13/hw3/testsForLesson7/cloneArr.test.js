import { cloneArr } from './cloneArr'

it('shold return clone of arr', () => {
    const res = cloneArr([])
    expect(res).toEqual([])
})

it('shold return clone of arr', () => {
    const res = cloneArr([1, 2, 3])
    expect(res).toEqual([1, 2, 3])
})

it('shold return clone of arr', () => {
    const res = cloneArr('')
    expect(res).toEqual(null)
})