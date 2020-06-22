const successPromise = new Promise(resolve => {
    resolve(32);
});

/*
 * исправьте цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */

successPromise
    .then(number => {
        const halfNumber = number / 2;
        return halfNumber;
    })
    .then(number => {
        const squaredNumber = number * number;
        return squaredNumber;
    })
    .then(result => {
        console.log(result); // 256
    });

/*
 * исправьте цепочку промисов, чтобы в последнем обработчике вывелось нужное число
 */
successPromise
    .then(number => {
        const tenNum = number * 10
        return tenNum
    })
    .then(result => {
        console.log(result); // 320
    });

console.log('!!! Обратите внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!');