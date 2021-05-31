import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase';
import 'firebase/firestore';
import store from './store';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyC_evFjyIO9gCs1KmOb74mkCdC8YvcRJQY",
  authDomain: "imblock-alpha.firebaseapp.com",
  projectId: "imblock-alpha",
  storageBucket: "imblock-alpha.appspot.com",
  messagingSenderId: "953475870744",
  appId: "1:953475870744:web:d784a4a7eee53e3b15136d",
  measurementId: "G-7G66FMFB34"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;
firebase.analytics();

firebase.auth().onAuthStateChanged((user) => {
  store.commit("updateUser", {user});
});

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
