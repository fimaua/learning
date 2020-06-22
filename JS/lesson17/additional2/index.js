const formatSeconds = seconds => {
    if (seconds < 10) {
        return `0${seconds}`
    }
    return seconds;
};
export const timer = {
    minsPassed: 0,
    secondsPassed: 0,
    _interval: null,
    startTimer() {
        this._interval = setInterval(() => {
            this.secondsPassed += 5;
            if (this.secondsPassed === 60) {
                this.minsPassed += 1;
                this.secondsPassed = 0;
            }
        }, 5000);
    },
    stopTimer() {
        clearInterval(this._interval);
        this._interval = null;
    },
    resetTimer() {
        this.stopTimer();
        this.minsPassed = 0;
        this.secondsPassed = 0;
    },
    getTime() {
        const formattedSeconds = formatSeconds(this.secondsPassed);
        return `${this.minsPassed}:${formattedSeconds}`;
    }
};