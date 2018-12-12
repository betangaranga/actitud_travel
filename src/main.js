import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import VModal from 'vue-js-modal'

Vue.use(VueFire)
Vue.use(VModal)
Vue.config.productionTip = false
Vue.use(VueMaterial)
var config = {
  apiKey: "AIzaSyAFMKnmJXlbtPCTPeByyjl2_hp0PHKrwyY",
  authDomain: "actitud-travel.firebaseapp.com",
  databaseURL: "https://actitud-travel.firebaseio.com",
  projectId: "actitud-travel",
  storageBucket: "actitud-travel.appspot.com",
  messagingSenderId: "561372345108"
};
firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);
export const db = firebase.firestore()
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
