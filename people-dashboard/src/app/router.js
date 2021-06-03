import Vue from "vue";
import VueRouter from "vue-router";
import {getters} from "./store";
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
            prevRoute: true,
            full: true
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

router.beforeEach((to, from, next) => {
    if (to.meta?.permissions?.includes('auth') && !getters.isAuthenticated) {
        return next({name: "dashboard"})
    }
    return next()
})

export default router