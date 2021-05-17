
// initial state
const state = {
    search : ''
}

const getters = {
    getSearch: (state) => state.search
}

const mutations = {
    setSearch (state, search) {
        state.search = search;
    }
}

export default {
    state,
    getters,
    mutations
}
