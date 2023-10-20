const winston = require('winston');
const config = require('../../../config.json');
const { combine, timestamp, label, json } = winston.format;

const logFile = config.logPath.default;
class Logger {
    constructor () {
        if (logFile) {
            this.winstonLogger = winston.createLogger({
                level: 'info',
                format: combine(
                    label({ label: config.ENV ? config.ENV : 'DEV'}),
                    timestamp(),
                    json()
                ),
                transports: [
                    new winston.transports.File({ filename: logFile }),
                    new winston.transports.Console()
                ]
            });
        }
        else {
            this.winstonLogger = winston.createLogger({
                level: 'info',
                format: combine(
                    label({ label: config.ENV ? config.ENV : 'DEV'}),
                    timestamp(),
                    json()
                ),
                transports: [
                    new winston.transports.Console()
                ]
            });
        }
    }
    
    log(level, logObj) {
        this.winstonLogger.log(level, logObj);
    }
}

const logger = new Logger();
module.exports = logger;