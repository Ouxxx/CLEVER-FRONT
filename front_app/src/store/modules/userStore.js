
// initial state
const state = {
    id : '',
    email : '',
    token : '',
    phone : ''

}

const getters = {
    getId (state) { return state.id },
    getEmail (state) { return state.email },
    getPhone (state) { return state.phone },
    getToken (state) { return state.token } 
}

const mutations = {
    // cette fonction permet de stocker les donnée de l'utilisateur lors de la connexion de l'utilisateur
    // userData : {id, email, password, phone}
    loadUser (state, userData) {
        state.id = userData.id;
        state.token = userData.token;
        state.email = userData.email;
    },

    // cette fonction permet de stocker les donnée de l'utilisateur lors de la creation du compte
    // userData : {email, password, phone}
    setUser (state, transitionData) {
        state.email = transitionData.email;
        state.phone = transitionData.phone;
    },

    // cette fonction permet de stocker l'id de l'utilisateur lors de la creation du compte
    // id : String contenant l'id
    setUserId (state, id){
        state.id = id;
    },

    setEmail (state, email) {
        state.email = email
    },

    setToken (state, token) {
        state.token = token
    }
}

export default {
    //namespaced: true,
    state,
    getters,
    mutations
}
