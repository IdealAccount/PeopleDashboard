import axios from 'axios';
const BASE_URL = `${process.env.VUE_APP_API_URL}/people`
export const api = {
    getUsers: (page = 1, perPage = 5) => {
       return axios.get(`${BASE_URL}?pp=${perPage}&p=${page}`)
           .then(({data}) => data)
    },
    getUser: id => axios.get(`${BASE_URL}/${id}`).then(({data}) => data),
}