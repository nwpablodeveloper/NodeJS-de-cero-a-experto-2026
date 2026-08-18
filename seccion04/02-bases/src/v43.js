// console.clear();

const { buildLogger } = require('../plugins');

const logger = buildLogger('v42.js');

logger.log('Hola mundo');
logger.error('Esto es un error');