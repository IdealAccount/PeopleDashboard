import Vue from "vue";

const TOKEN_KEY = "user-token";

const state = Vue.observable({
    token: null,
    modals: []
})
const getters = {
    get isAuthUser() {
        return !!state.token;
    },
};

const mutations = {
   SET_TOKEN(token) {
       state.token = token;
   },
};
const actions = {
    checkToken() {
       const token = localStorage.getItem(TOKEN_KEY);
       if(token) {
           mutations.SET_TOKEN(token);
       }
    },
    login(token) {
        localStorage.setItem(TOKEN_KEY, token);
        mutations.SET_TOKEN(token)
    },
    logout() {
        localStorage.removeItem(TOKEN_KEY);
        mutations.SET_TOKEN(null);
    },
};

export  {
    state,
    getters,
    actions,
};
