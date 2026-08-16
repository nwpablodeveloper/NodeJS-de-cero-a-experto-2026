

const httpClientePlugin = {

    get: async (url) => {

        const resp = await fetch(url);
        return await resp.json();
        
    }

}

module.exports = {
    http: httpClientePlugin,
}

