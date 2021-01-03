import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import "../sass/style.scss";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import storeAdmin from "./storeAdmin";

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);
Vue.use(store);
Vue.use(storeAdmin);

import { BootstrapVue } from "bootstrap-vue";

Vue.use(BootstrapVue);

let token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = token;
  console.log("get token",token);
}

new Vue({
  vuetify,
  router,
  store,
  storeAdmin,
  render: (h) => h(App),
}).$mount("#app");
