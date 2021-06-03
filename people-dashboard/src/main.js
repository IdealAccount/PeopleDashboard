import "@/assets/styles/main.scss";
import Vue from "vue";
import * as config from "./app/config";
Vue.config.productionTip = false;

new Vue({
  ...config,
  render: (h) => h(require("./app/App.vue").default),
}).$mount("#app");
