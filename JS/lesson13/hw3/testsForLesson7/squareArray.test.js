import { squareArray } from "./squareArray";

it('should return squared arr', () => {
    const res = squareArray([1, 2, 3])
    expect(res).toEqual([1, 4, 9])
})

it('should return squared arr', () => {
    const res = squareArray([])
    expect(res).toEqual([])
})

it('should return squared arr', () => {
    const res = squareArray('')
    expect(res).toEqual(null)
})