const obj1 = {
    room1: [
        { name: 'room1 name1' },
        { name: 'room1 name2' },
        { name: 'room1 name3' },
        { name: 'room1 name4' },
    ],
    room2: [
        { name: 'room2 name1' },
    ],
    room3: [
        { name: 'room3 name1' },
        { name: 'room3 name2' },
        { name: 'room3 name3' },
    ],
}
const getPeople = obj =>
    Object.values(obj)
    .reduce((acc, elem) => acc
        .concat(elem), [])
    .reduce((acc, item) => acc
        .concat(item['name']), [])