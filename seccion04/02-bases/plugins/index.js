const { getAge } = require('./get-age.plugin');
const { getUUID } = require('./get-uuid.plugin');
const { http } = require('./http-cliente.plugin');
const { buildLogger } = require('./logeer.plugin');
 

module.exports = {
    getAge,
    getUUID,
    http,
    buildLogger,
}