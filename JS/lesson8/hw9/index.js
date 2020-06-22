const obj1 = { a: 1, b: 2, c: 3 };
const arr1 = ['a', 'c'];
const pickProps = (obj, arr) => {
    let result = {};
    for (let key of arr) {
        if (Object.keys(obj).includes(key)) {
            result[key] = obj[key]
        }
    }
    return result
}