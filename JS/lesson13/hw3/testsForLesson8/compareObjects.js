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
export const compareObjects = (obj1, obj2) => {
    if (Object.keys(obj1).length === Object.keys(obj2).length) {

        for (let key in obj1) {

            if (!(obj1[key] === obj2[key])) {
                return false

            }
        }
        return true

    }
    return false
}