const { getAge } = require('./get-age.plugin');
const { getUUID } = require('./get-uuid.plugin');
const { http } = require('./http-cliente.plugin');
 

module.exports = {
    getAge,
    getUUID,
    http,
}