import Vue from 'vue';
import {actions} from "../app/shared/modals/modals-state";


const openModal = (modalName, data = {}) => {
    actions.setModal({modalName, data})
    openModal.counter = 0

    return new Promise(resolve => {
        const callback = ({detail}) => {
            const {data} = detail;
            data !== null ? resolve(data) : actions.closeModal()
            window.removeEventListener(`modalClose-${modalName}`, callback);
        }
        window.addEventListener(`modalClose-${modalName}`, callback);
    })
}

Vue.prototype.$openModal = openModal;

export default openModal