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
    component: require('./components/repaire/Repaire_v2').default,
    children: [
      {
        path: 'profil',
        component: require('./components/repaire/mon_profil/Mon_profil_v1').default,
      },{
        path: 'soutiens',
        component: require('./components/repaire/soutiens/Soutiens_v1').default,
      },{
        path: 'media',
        component: require('./components/repaire/media/media_v1').default,
        children: [
          {
            path: 'video',
            component: require('./components/repaire/media/media_video_v1').default,
          },{
            path: 'ecrit',
            component: require('./components/repaire/media/media_ecrit_v1').default,
          },{
            path: 'image',
            component: require('./components/repaire/media/media_image_v1').default,
          }
        ]
      }
    ]
  },{
    path: '/parametres',
    component: require('./components/parametres/Parametre_v1').default,
    children: [
      {
        path: 'account',
        component: require('./components/parametres/account/Account_v1').default,
        children: [
          {
          path: 'pwd',
          component: require('./components/parametres/account/pagePwd_v1').default,
          },{
          path: 'email',
          component: require('./components/parametres/account/pageEmail_v1').default,
          },{
          path: 'phone',
          component: require('./components/parametres/account/pagePhone_v1').default,
          }
        ]
      },{
        path: 'privacy',
        component: require('./components/parametres/privacy/Privacy_v1').default,
      },{
        path: 'security',
        component: require('./components/parametres/security/Security_v1').default,
      },{
        path: 'payments',
        component: require('./components/parametres/payments/Payments_v1').default,
      }
    ]
  },{
    path: '/ajout',
    component: require('./components/ajout/ajout_v2').default,
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

