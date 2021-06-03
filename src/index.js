// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
import store from './store'

// Vue components (for use in html)
Vue.component('App', require('./js/components/App.vue').default)




// Vue init
const app = new Vue({
  data(){
    return{
      component: true,
    }
  },
  store,
  el: '#app'
})
