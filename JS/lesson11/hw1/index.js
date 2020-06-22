const str1 = 'hallo darkness my little friend'
const str2 = ['hallo darkness my little friend']
const num1 = 5;

const splitString = (string, number = 10) => {


    const changeStr = (str, num) => {
        const strArr = [];
        let startPosition = 0;

        while (true) {
            let newStr = str.substr(startPosition, num);


            if (newStr.length < num) {
                const tchk = '.'
                let countDots = num - newStr.length
                let lineOfDots = newStr.slice(1).concat(tchk.repeat(countDots));

                strArr.push(newStr[0] + lineOfDots)
                break
            }


            strArr.push(newStr[0] + newStr.slice(1));
            startPosition += num;
        }

        return strArr
    }

    if (typeof(string) === 'string') {
        return changeStr(string, number)
    }
    return null
}