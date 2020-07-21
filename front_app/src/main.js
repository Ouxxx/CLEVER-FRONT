import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import store from './store'

/* Assignez Vue.config.productionTip à false 
   pour ne plus avoir la notification de production au démarrage de Vue. */
Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/Welcome_v1').default,
  },{
    path: '/home',
    component: require('./components/Home_v1').default,
  },{
    path: '/visitor',
    component: require('./components/Home_v1').default,
  },{
    path: '/repaire',
    component: require('./components/repaire/Repaire_v1').default,
    children: [
      {
        path: '/Mes-soutiens',
        component: require('./components/repaire/Mes_soutiens_v1').default,
      },{
        path: '/Historique-des-achats',
        component: require('./components/repaire/Historique_des_achats_v1').default,
      }
    ]
  },{
    path: '/create/user',
    component: require('./components/create_user/Create_user_v1').default,
    children: [
      {
        path: 'informations',
        component: require('./components/create_user/User_form_v2').default,
      },{
        path: 'verification',
        component: require('./components/create_user/User_codes_v2').default,
      },{
        path: 'confirmation',
        component: require('./components/create_user/User_confirmation_v1').default,
      }
    ]
  },{
    path: '/forgot/password',
    component: require('./components/forgot_password/Forgot_password_v1').default,
    children: [
      {
        path: 'informations',
        component: require('./components/forgot_password/Forgot_form_emailinfo_v1').default,
      },{
        path: 'verification',
        component: require('./components/forgot_password/Forgot_form_verification_v1').default,
      },{
        path: 'new',
        component: require('./components/forgot_password/Forgot_form_newpassword_v1').default,
      },{
        path: 'confirmation',
        component: require('./components/forgot_password/Forgot_form_confirmation_v1').default,
      }
    ]
  },{
    path: '*',
    redirect: '/'
  }]   
})


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

