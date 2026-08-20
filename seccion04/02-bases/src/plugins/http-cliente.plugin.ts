import axios from 'axios'

export const httpClientePlugin = {

    get: async (url: string) => {
       const { data } = await axios.get(url)
       return data;
    }

}


