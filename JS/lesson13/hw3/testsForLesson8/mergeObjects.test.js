import { mergeObjectsV1, mergeObjectsV3, mergeObjectsV4 } from "./mergeObjects";

const obj1 = {
    name: 'Tom',
    age: 17,
};
const obj2 = {
    name: 'Bob',
    student: false,
};


it('should return one object consist from two others', () => {
    const res = mergeObjectsV1(obj1, obj2)
    expect(res).toequal({
        name: 'Bob',
        student: false,
        age: 17,
    })
})

it('should return one object consist from two others', () => {
    const res = mergeObjectsV3(obj1, obj2)
    expect(res).toequal({
        name: 'Bob',
        student: false,
        age: 17,
    })
})

it('should return one object consist from two others', () => {
    const res = mergeObjectsV4(obj1, obj2)
    expect(res).toequal({
        name: 'Tom',
        student: false,
        age: 17,
    })
})