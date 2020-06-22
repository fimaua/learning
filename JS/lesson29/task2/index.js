export const pinger = (num, period) => {
    let i = num;
    console.log('ping')
    const interval = setInterval(() => {
        if (--i > 0) {
            console.log('Ping')
        } else {
            clearInterval(interval)
        }
    }, period)
}