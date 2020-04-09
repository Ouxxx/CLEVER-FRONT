
// initial state
const state = {
    addr : 'http://localhost',
    port : '3000'
}

const getters = {
    getAddr (state) { return state.addr },
    getPort (state) { return state.port },
}

export default {
    state,
    getters
}
