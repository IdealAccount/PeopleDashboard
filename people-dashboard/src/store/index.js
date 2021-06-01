import Vue from 'vue';
const state = Vue.observable({
    token: null,
    modals: []
})
const getters = {
    get isAuthUser() {
        return !!state.token;
    },
};
const actions = {
    login(token) {
        state.token = token;
        localStorage.setItem("user-token", token);
    },
    logout() {
        state.token = null;
        localStorage.removeItem("user-token");
    },
};

export  {
    state,
    getters,
    actions,
};
