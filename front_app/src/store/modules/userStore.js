
// initial state
const state = {
    id : '',
    email : 'uhuuu',
    password : '',
    phone : ''

}

const getters = {
    getId (state) { return state.id },
    getEmail (state) { return state.email },
    getPhone (state) { return state.phone } 
}

const mutations = {
    // cette fonction permet de stocker les donnée de l'utilisateur lors de la connexion de l'utilisateur
    // userData : {id, email, password, phone}
    loadUser (state, userData) {
        state.id = userData.id,
        state.email = userData.email,
        state.password = userData.password,
        state.phone = userData.phone
    },

    // cette fonction permet de stocker les donnée de l'utilisateur lors de la creation du compte
    setUser (state, transitionData) {
        state.email = transitionData.email,
        state.password = transitionData.password,
        state.phone = transitionData.phone
    }
}

export default {
    //namespaced: true,
    state,
    getters,
    mutations
}
