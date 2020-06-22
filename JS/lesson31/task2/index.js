export const asyncCalculator = num => new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Initial value: ${num}`)
            resolve(num)
        }, 500)
    })
    .then(value => new Promise((resolve) => {
        setTimeout(() => {
            const res = value * value;
            console.log(`Squared value: ${res}`)
            resolve(res);
        }, 500)
    }))
    .then(value => {
        const res = value * 2;
        console.log(`Doubled value: ${res}`)
        return res;
    })