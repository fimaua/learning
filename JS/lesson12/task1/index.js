const calc = str => {
    const [a, oper, b] = str.split(' ')
    let result;

    switch (oper) {
        case '+':
            result = Number(a) + Number(b)
            break;

        case '-':
            result = Number(a) - Number(b)
            break;

        case '*':
            result = Number(a) * Number(b)
            break;

        case '/':
            result = Number(a) / Number(b)
            break;
    }
    return `${str} = ${result}`
}