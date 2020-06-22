import { compareObjects } from "./compareObjects";

const obj1 = {
    name: 'Tom',
    age: 17,
};
const obj2 = {
    name: 'Bob',
    age: 17,
};
const obj3 = {
    name: 'Bob',
    age: 17,
    student: false,
};
const obj4 = {
    name: 'Tom',
    age: 17,
};

it('should return true if objects are the same', () => {
    const res = compareObjects(obj1, obj4)
    expect(res).toEqual(true)
})

it('should return true if objects are different', () => {
    const res = compareObjects(obj1, obj2)
    expect(res).toEqual(false)
})

it('should return true if objects are different', () => {
    const res = compareObjects(obj1, obj3)
    expect(res).toEqual(false)
})