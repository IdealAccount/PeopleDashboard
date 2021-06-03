import {auth} from "./fireinit";

const REG_USER = "createUserWithEmailAndPassword",
    LOGIN = "signInWithEmailAndPassword"

/*const request = () => {}*/

export const firebaseApi = {
    auth: (type, formData) => {
        let method = type === 'registration' ? REG_USER : LOGIN;
        return auth[method](...formData)
    },
/*    login: (emailAndPassword) => authRequest(LOGIN, emailAndPassword),
    registration: (emailAndPassword) => authRequest(REG_USER, emailAndPassword),*/
}