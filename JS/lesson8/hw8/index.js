const keys = ['names', 'adress', 'age', ];
const values = ['Bob', 'Ukaine', '34'];

const buildObject = (keysList, valuesList) => {
    let obj = {};
    keysList.reduce((sum, item, index) => (obj[item] = valuesList[index]), 0)
    return obj
}