const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
export const addPropertyV2 = (obj, key, value) => {
    Object.assign(obj[key] = value)
    return obj;
}
let res = {};
export const addPropertyV3 = (obj, key, value) => {
    Object.assign(res, obj)
    res[key] = value;
    return res;
}
export const addPropertyV4 = (obj, key, value) => {
    res = {...obj, [key]: value }
    return res;
}