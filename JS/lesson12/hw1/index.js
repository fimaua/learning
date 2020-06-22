const str1 = 'ab cde fg'

const reverseString = string => {
    if (typeof(string) !== 'string') {
        return null
    }
    const newArr = string.split('')
    return newArr.reverse().reduce((acc, item) => acc + item, '')
}