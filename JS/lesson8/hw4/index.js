const addPropertyV1 = (userData, userId) => {
    userData.id = userId;
    return userData;
}
const addPropertyV2 = (userData, userId) => {
    Object.assign(userData.id = userId)
    return userData;
}
let obj = {};
const addPropertyV3 = (userData, userId) => {
    Object.assign(obj, userData)
    obj.id = userId;
    return obj;
}
const addPropertyV4 = (userData, userId) => {
    obj = {...userData, id: userId }
    return obj;
}