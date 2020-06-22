export const parseUser = userJson => {
    let userResult;
    try {
        JSON.parse(userJson)
        userResult = true;
    } catch (e) {
        userResult = false;
    } finally {
        return userResult ?
            JSON.parse(userJson) :
            null
    }
}