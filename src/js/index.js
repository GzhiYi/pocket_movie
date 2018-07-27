import Vue from 'vue/dist/vue.js';
import '../css/materialize.min.css'
import '../css/normalize.css'
import App from '../../components/app.vue'
console.log('App', App)
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})