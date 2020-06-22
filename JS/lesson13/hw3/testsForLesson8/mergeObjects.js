const obj1 = {
    name: 'Tom',
    age: 17,
};
const obj2 = {
    name: 'Bob',
    student: false,
};
let result = {};
export const mergeObjectsV1 = (obj1, obj2) =>
    result = Object.assign(result, obj1, obj2)


const mergeObjectsV2 = (obj1, obj2) =>
    result = Object.assign(result, obj2, obj1)


export const mergeObjectsV3 = (obj1, obj2) =>
    result = {...obj1, ...obj2 }

export const mergeObjectsV4 = (obj1, obj2) =>
    result = {...obj2, ...obj1 }