import { increaser } from "./increaser";

it('should increase a on index', () => {
    const res = increaser(1, 2)
    expect(res).toEqual(1)
})

it('should increase a on index', () => {
    const res = increaser(1, 1)
    expect(res).toEqual(1)
})

it('should increase a on index', () => {
    const res = increaser(2, 1)
    expect(res).toEqual(3)
})