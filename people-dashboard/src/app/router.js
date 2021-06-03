import Vue from "vue";
import VueRouter from "vue-router";
import {dashboardRoutes} from "./modules/dashboard/dashboard-routes";
import {profileRoutes} from "./modules/profile/profile-routes";


const routes = [
    {
        path: "/", redirect: {name: "dashboard"}
    },
    {
        path: "*",
        name: "not-found",
        meta: {
            transition: "fade-out",
            prevRoute: true
        },
        component: () => import("./static/Page404")
    },
    ...dashboardRoutes,
    ...profileRoutes,

]
const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

Vue.use(VueRouter);


export default router