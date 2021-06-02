import "@/assets/styles/main.scss";
import Vue from "vue";
import * as config from "./config";
import {actions} from "./store";

Vue.config.productionTip = false;

actions.checkToken()


new Vue({
  ...config,
  render: (h) => h(require("./App.vue").default),
}).$mount("#app");
