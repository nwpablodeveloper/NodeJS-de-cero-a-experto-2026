const winston = require('winston');

const getLogger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
//   defaultMeta: { service: 'user-service' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


if (process.env.NODE_ENV !== 'production') {
  getLogger.add(new winston.transports.Console({ // Mostrar log por consola
    format: winston.format.simple(),
  }));
}

const buildLogger = (service) => {
    return {
        log: (message) => {
            getLogger.log('info', {message, service});
        }
    }
}



module.exports = {
    buildLogger
}