console.clear();

import  { buildLogger }  from './plugins/logger.plugin-parte-2 ';

const logger = buildLogger('v48.js');

logger.log('Hola mundo');
logger.error('Esto es un error');
