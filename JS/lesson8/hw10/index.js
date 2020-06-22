const obj1 = { 'Jon': 19, 'Tom': 17, 'Bob': 18 };
const getAdults = obj => {
    let newObj = {};
    for (let age in obj) {
        if (obj[age] >= 18) {
            newObj[age] = obj[age]
        }
    }
    return newObj;
}