const addPropertyV1 = (obj, key, value) => {
    obj[key] = value;
    return obj;
}
const addPropertyV2 = (obj, key, value) => {
    Object.assign(obj[key] = value)
    return obj;
}
let res = {};
const addPropertyV3 = (obj, key, value) => {
    Object.assign(res, obj)
    res[key] = value;
    return res;
}
const addPropertyV4 = (obj, key, value) => {
    res = {...obj, [key]: value }
    return res;
}