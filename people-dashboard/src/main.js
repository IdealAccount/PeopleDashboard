import "@/assets/styles/main.scss";
import Vue from "vue";
import * as config from "./config";
Vue.config.productionTip = false;

new Vue({
  ...config,
  render: (h) => h(require("./App.vue").default),
}).$mount("#app");
