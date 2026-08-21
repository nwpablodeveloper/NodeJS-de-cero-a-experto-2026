import axios from 'axios'

export const httpClientPlugin = {

    get: async (url: string) => {
       const { data } = await axios.get(url)
       return data;
    },

    post: async (url: string, body: any) => {
        throw new Error('Función no implementada');
    },

    put: async (url: string, body: any) => {
        throw new Error('Función no implementada');
    },

    delete: async (url: string) => {
        throw new Error('Función no implementada');
    }

}


