/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */

export const makePromise = val => new Promise(resolve => resolve(val))

/*
 * пример использования
 */
makePromise(17)
    .then(number => {
        console.log(number); // 17
    });