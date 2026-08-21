import winston, { format }from 'winston';
const { combine, timestamp, json } = format;


export const getLogger = winston.createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    json(),
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


// if (process.env.NODE_ENV !== 'production') {
//   getLogger.add(new winston.transports.Console({ // Mostrar log por consola
//     format: winston.format.simple(),
//   }));
// }

export const buildLogger = (service: string) => {
    return {
        log: (message: string) => {
           getLogger.log('info', {message, service});
        },
        error: (message: string) => {
          getLogger.error('error', {
            message, 
            service,
          });
        }
    }
}


