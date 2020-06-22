export const createLogger = () => {
    let memory = []

    function warn(string) {
        const obj = {
            message: string,
            dateTime: new Date(),
            type: 'warn'
        }
        memory.push(obj)
    }

    function error(string) {
        const obj = {
            message: string,
            dateTime: new Date(),
            type: 'error'
        }
        memory.push(obj)
    }

    function log(string) {
        const obj = {
            message: string,
            dateTime: new Date(),
            type: 'log'
        }
        memory.push(obj)
    }



    function getRecords(string) {
        switch (string) {
            case 'warn':
                return memory.filter(object => object.type === 'warn').sort().sort((a, b) => b.dateTime - a.dateTime)
            case 'error':
                return memory.filter(object => object.type === 'error').sort().sort((a, b) => b.dateTime - a.dateTime)
            case 'log':
                return memory.filter(object => object.type === 'log').sort().sort((a, b) => b.dateTime - a.dateTime)
            case undefined:
                return memory.sort().sort((a, b) => b.dateTime - a.dateTime)
        }
    }
    return {
        warn,
        error,
        log,
        getRecords,
    }
}