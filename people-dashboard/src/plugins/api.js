import Vue from 'vue';
import axios from "axios";
import {notify} from "./notifiy";

const config = {
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 30000,
    validateStatus(status) {
        return status < 500
    }
}

const _axios = axios.create(config);

// TODO реализовать обработку ошибок, проверку токена и multipart/form-data

_axios.interceptors.request.use(
    async (config) => {
        // console.log(config, ' request config request')
        return config
    },
    (error) => {
        // console.log(error, ' request error request')
        return Promise.reject(error)
    }
)

// response interceptor
_axios.interceptors.response.use(
    (response) => {
        if (response.status !== 200) {
            // console.log(response)
            notify({text: response, type: "error"})
            return
        }
        // console.log(response, 'request response')
        return response
    },error => Promise.reject(error)
)

class AxiosPlugin {
    install() {
        Object.defineProperties(Vue.prototype, {
            axios: {
              get() {
                  return _axios
              }
            },
            $axios: {
                get() {
                    return _axios
                }
            }
        })
    }
}

const axiosPlugin = new AxiosPlugin();

Vue.use(axiosPlugin)

export default axiosPlugin
export const $axios = _axios