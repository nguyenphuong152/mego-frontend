import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import '../sass/style.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(store)
Vue.use(BootstrapVue)

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
