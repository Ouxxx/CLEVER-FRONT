import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/userStore'
import server from './modules/serverStore'
import logos from './modules/logosStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        server,
        logos
    }
})