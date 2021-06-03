import Vue from "vue";
import {firebaseApi} from "./shared/services/firebase/firebaseApi";
import {notify} from "../plugins/notifiy";

const TOKEN_KEY = "user-token";

const state = Vue.observable({
    token: null,
    user: null,
    modals: []
})
const getters = {
    get isAuthenticated() {
        return !!state.user
    },
};

const mutations = {
    SET_STATE({user, token}) {
        state.token = token
        state.user = user
    },
    CLEAR_STATE() {
        state.user = null
        state.token = null
    }
};
const actions = {
    auth(type, ...emailAndPassword) {
        return firebaseApi.auth(type, emailAndPassword)
            .then(({user}) => {
                const {email, uid, photoURL, phoneNumber, displayName, za: token} = user;
                mutations["SET_STATE"]({
                    user: {email, uid, photoURL, phoneNumber, displayName},
                    token
                })
                localStorage.setItem(TOKEN_KEY, token)
                notify({title: `Successful ${type}`})
            })
            .catch(err => {
                notify({text: err.message, type: "error", position: "left bottom"})
                throw err
            })
        /* mutations.SET_STATE({token, user})
         localStorage.setItem(TOKEN_KEY, token)*/
        // Vue.prototype.$axios.defaults.headers.common['Authorization'] = token;
    },
    logout() {
        mutations["CLEAR_STATE"]();
        localStorage.removeItem(TOKEN_KEY);
    },
    /*    checkToken() {
       const token = localStorage.getItem(USER_TOKEN);
       if (token) {
           auth.signInWithCustomToken(token)
               .then(data => {
                   console.log(data, 'checktoken')
               })
               .catch(err => {
                   console.log(err, 'checktoken')
               })
       }
    },*/
};

export {
    state,
    getters,
    actions,
};
