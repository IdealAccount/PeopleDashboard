import Vue from 'vue'
export const state = Vue.observable({
    modalList: []
})

export const getters = {
    get modals() {
        return state.modalList
    },
    get modalIsOpen () {
        return state.modalList.length >= 1
    }
  /*  modalId(modalComponent) {
        return state.modalList.find(v => v.component === modalComponent).id
    }*/
};

export const mutations = {
    SET_MODAL(modal) {
        state.modalList.push(modal);
    },
    CLOSE_MODAL() {
        state.modalList.pop();
    }
};

export const actions = {
    setModal(modal) {
        mutations["SET_MODAL"](modal);
        if (getters["modalIsOpen"]) {
            document.body.style.overflow = "hidden";
        }
    },
    closeModal() {
        mutations["CLOSE_MODAL"]();
        if (!getters["modalIsOpen"]) {
            document.body.style.overflow = "";
        }
    }
};