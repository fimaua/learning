import { createLogger } from "./index.js";


const logger1 = createLogger()
const logger2 = createLogger()

logger2.warn('hello')
logger2.error('hi')
logger2.log('from')
logger2.warn('logger')
logger2.warn('o')
logger2.warn('1')

console.log(logger2.getRecords('warn'))