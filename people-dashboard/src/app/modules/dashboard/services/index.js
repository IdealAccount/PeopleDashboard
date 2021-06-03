import {$axios} from "../../../../plugins/api";

export const api = {
    getUsers: ({page, pp}) => (
        $axios.get(`/people?pp=${pp}&p=${page}`).then(({data}) => data)
    ),
    getUser: id => $axios.get(`/people/${id}`).then(({data}) => data),
}