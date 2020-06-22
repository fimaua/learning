import { addPropertyV2, addPropertyV3, addPropertyV4 } from "./anotherProperty";

it('should return object with new property', () => {
    const res = addPropertyV2({ user: 'Sam' }, 'id', '12')
    expect(res).toEqual({ user: 'Sam', id: '12' })
})
it('should return object with new property', () => {
    const res = addPropertyV3({ user: 'Sam' }, 'id', '12')
    expect(res).toEqual({ user: 'Sam', id: '12' })
})
it('should return object with new property', () => {
    const res = addPropertyV4({ user: 'Sam' }, 'id', '12')
    expect(res).toEqual({ user: 'Sam', id: '12' })
})