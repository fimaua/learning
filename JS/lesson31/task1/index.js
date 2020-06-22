export const requestUserData = userId => new Promise((rulfilled, rejected) => {
    if (userId === 'broken') {
        setTimeout(() => {
            rejected(new Error('User not found'));
        }, 500);
    } else {
        setTimeout(() => {
            rulfilled({
                name: 'John',
                age: 17,
                userId: `${userId}`,
                email: `${userId}@example.com`,
            });
        }, 1000)
    }
})