const arr1 = ['1.9 ', ' 16.4', 17, '1 dollar', 'asdgfadf', ' '];

// const cleanTransactionsList = arr => {
//     const newArr = []
//     arr.map(elem => {

//         const changeTypeOfString = Number(elem)

//         const roundString = changeTypeOfString.toFixed(2)

//         if (!isNaN(changeTypeOfString) && changeTypeOfString !== 0) {
//             newArr.push('$' + (roundString))
//         }
//     })
//     return newArr
// }
const cleanTransactionsList = transactions =>
    transactions
    .filter(tr => isFinite(tr))
    .map(elem => '$' + Number(elem).toFixed(2))