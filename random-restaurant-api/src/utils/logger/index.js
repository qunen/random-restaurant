const logger = require('./winstonAdaptor');
const config = require('../../../config.json');

class LoggerWrapper {
    constructor(logger) {
        this.logger = logger;
    }

    /**
     * Wrapper for info logs
     * @params {string} logMessage
     * @params {object} obj
     */
    info(logMessage, obj = {}) {
        const logObj = {
            env: config.env ? config.env : 'DEV',
            level: 'info',
            message: logMessage,
            details: obj,
            timestamp: new Date().toISOString()
        };
        this.logger.log('info', logObj);
    }

    /**
     * Wrapper for error logs
     * @params {string} logMessage
     * @params {object} obj
     */
     error(logMessage, obj = {}) {
        const errorObj = (obj instanceof Error) ? { errorMessage: obj.message, errorStack: obj.stack } : obj;
        const logObj = {
            env: config.env ? config.env : 'DEV',
            level: 'error',
            message: logMessage,
            details: obj,
            timestamp: new Date().toISOString()
        };
        this.logger.log('error', logObj);
    }

    /**
     * Wrapper for warning logs
     * @params {string} logMessage
     * @params {object} obj
     */
     warn(logMessage, obj = {}) {
        const logObj = {
            env: config.env ? config.env : 'DEV',
            level: 'warn',
            message: logMessage,
            details: obj,
            timestamp: new Date().toISOString()
        };
        this.logger.log('warn', logObj);
    }
}

const loggerWrapper = new LoggerWrapper(logger);
module.exports = loggerWrapper;