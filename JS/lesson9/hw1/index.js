const obj1 = {
    'customer-id-1': {
        name: 'William',
        age: 54,
    },
    'customer-id-2': {
        name: 'Tom',
        age: 17,
    },
}
const getCustomersList = obj => {

    const arr1 = Object.keys(obj)
    const arr2 = Object.values(obj)

    return arr2.map(obj => {
        const val = Object.assign({}, obj)
        val['id'] = arr1[arr2.indexOf(obj)]
        return val
    }).sort((a, b) => a['age'] - b['age'])

}