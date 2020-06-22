const fetchUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`)
        if (!response.ok) {
            return;
        }
        return response.json();
    } catch (err) {
        throw new Error('Failed to fetch user')
    }
};
export const getUsersBlogs = usersArr => {
    const allPromises = usersArr.map(userId =>
        fetchUser(userId)
        .then(user => user.blog)
    )
    return Promise.all(allPromises)
}