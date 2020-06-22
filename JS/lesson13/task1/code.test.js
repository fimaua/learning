const getEvenNumbers = arr =>
    arr.filter(num => (num % 2 === 0))

it('should get only even numbers from arr', () => {
    const res = getEvenNumbers([1, 2, 3, 4, 5])

    expect(res).toEqual([2, 4])
})

it('17 === 17', () => {
    expect(17).toEqual(17)
})
it('18 !== 17', () => {
    expect(18).not.toEqual(17)
})