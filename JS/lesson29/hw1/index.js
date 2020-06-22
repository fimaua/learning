export const requestUserData = (userId, callback) => {
    const randomDelay = Math.floor(Math.random() * (4 - 1) + 1) * 1000

    const userData = {
        userId: userId,
        email: `${userId}@example.com`,
    }

    if (!(userData.userId === 'broken')) {
        const withRightData = () => callback(userData)
        setTimeout(withRightData, randomDelay)
    } else {
        const withWrongData = () => callback(null, 'Failed to load user data')
        setTimeout(withWrongData, randomDelay)
    }
}

const callbackFunc = (error, data) => {
    if (error) {
        console.log(error)
        return;
    }
    console.log(data)
}
requestUserData('broke', callbackFunc)