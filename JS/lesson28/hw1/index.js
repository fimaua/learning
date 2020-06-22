export const shmoment = startVal => {
    let result = {
        years: startVal.getFullYear(),
        months: startVal.getMonth(),
        days: startVal.getDate(),
        hours: startVal.getHours(),
        minutes: startVal.getMinutes(),
        seconds: startVal.getSeconds(),
        milliseconds: startVal.getMilliseconds(),
    };

    const setNewData = {
        add(time, value) {
            result[time] += value
            return this
        },
        subtract(time, value) {
            result[time] -= value
            return this
        },
        result() {
            return new Date(result.years, result.months, result.days, result.hours, result.minutes, result.seconds, result.milliseconds)
        }
    }
    return setNewData;
}