const string1 = 'one one oneone oneoneis here';
const string2 = '';

const countOccurrences = (str1, str2) => {
    let res = Array.from(str1.matchAll(str2))

    if (str2 !== '') {
        return res.length
    }
    return null
}