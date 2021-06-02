import axios from 'axios';
const BASE_URL = `${process.env.VUE_APP_API_URL}/people`
export const api = {
    getUsers: ({page, pp}) => {
       return axios.get(`${BASE_URL}?pp=${pp}&p=${page}`)
           .then(({data}) => data)
    },
    getUser: id => axios.get(`${BASE_URL}/${id}`).then(({data}) => data),
}