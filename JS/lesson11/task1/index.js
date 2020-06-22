const splitText = (string, number) => {
    const changeStr = (str, num) => {
        const strArr = [];
        let startPosition = 0;

        while (true) {
            let int = str.substr(startPosition, num);
            if (int.length === 0) {
                break
            }
            strArr.push(int[0].toUpperCase() + int.slice(1));
            startPosition += num;

        }

        return strArr.join('\n')
    }
    if (typeof(string) === 'string') {
        if (number === undefined) {
            number = 10;
            return changeStr(string, number)
        }
        return changeStr(string, number)
    } else return null
}