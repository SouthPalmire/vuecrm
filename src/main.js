import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyAbjLgBG7sNmrgqMUL9vNQJYErDKN29nPg",
  authDomain: "southpalmire-vuecrm.firebaseapp.com",
  projectId: "southpalmire-vuecrm",
  storageBucket: "southpalmire-vuecrm.appspot.com",
  messagingSenderId: "756675608634",
  appId: "1:756675608634:web:b21b7cb3dffab83a69b503",
  measurementId: "G-GFVR0NC6P8"
})

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.component('Loader', Loader)

let app
 
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})

