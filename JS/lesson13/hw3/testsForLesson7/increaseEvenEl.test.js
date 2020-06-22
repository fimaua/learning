import { increaseEvenEl } from './increaseEvenEl'

it('shold return clone of arr where all even increase on 2', () => {
    const res = increaseEvenEl([1, 2, 3], 2)
    expect(res).toEqual([1, 4, 3])
})

it('shold return clone of arr where all even increase on 2', () => {
    const res = increaseEvenEl([1, 3], 2)
    expect(res).toEqual([1, 3])
})

it('shold return clone of arr where all even increase on 2', () => {
    const res = increaseEvenEl('', 2)
    expect(res).toEqual(null)
})