import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/userStore'
import server from './modules/serverStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        server
    }
})