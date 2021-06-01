import Vue from 'vue'
import Vuex from 'vuex'

import categories from './modules/categorieStore'
import logos from './modules/logosStore'
import search from './modules/searchStore'
import server from './modules/serverStore'
import tests from './modules/testsStore'
import user from './modules/userStore'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        categories,
        logos,
        search,
        server,
        tests,
        user
    }
})