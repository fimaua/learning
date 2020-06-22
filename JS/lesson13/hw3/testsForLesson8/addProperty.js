const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
}
export const addPropertyV2 = (userData, userId) => {
    Object.assign(userData.id = userId)
    return userData;
}
let obj = {};
export const addPropertyV3 = (userData, userId) => {
    Object.assign(obj, userData)
    obj.id = userId;
    return obj;
}
export const addPropertyV4 = (userData, userId) => {
    obj = {...userData, id: userId }
    return obj;
}