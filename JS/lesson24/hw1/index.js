'use strict'
//algo
//1. take days, hours, minutes and seconds from incoming DataObjects
//2. find difference in milisecond betveen startDate and endDate
//3. create string with result
//4. format result string

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const getDiff = (startDate, finishDate) => {

    const difference = Math.abs(finishDate - startDate);

    const daysLeft = Math.floor(difference / DAY);

    const hoursLeft = Math.floor((difference % DAY) / HOUR);

    const minutesLeft = Math.floor((difference % HOUR) / MINUTE);

    const secondsLeft = Math.floor((difference % MINUTE) / SECOND);

    return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
};