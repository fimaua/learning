const obj1 = { 'Jon': 19, 'Tom': 17, 'Bob': 18, 'Ann': 100, 'Fima': 16 };
const getAdults = obj => {
    return Object.entries(obj)
        .filter(user => user[1] >= 18)
        .map(user => user[0])
}