import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/userStore'
import server from './modules/serverStore'
import logos from './modules/logosStore'
import tests from './modules/testsStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        server,
        logos,
        tests
    }
})