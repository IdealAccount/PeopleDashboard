import Dashboard from "../modules/dashboard/pages/VDashboard";

const Profile = () => import("../pages/VProfile");
const NotFound = () => import("../pages/static/NotFound");
export const routes = [
    {
        path: "/",
        redirect: {name: "dashboard"}
    },
    {
        path: "/dashboard",
        name: "dashboard",
        meta: {
          transition: "slide-out"
        },
        component: Dashboard
    },
    {
        path: "/profile",
        name: "profile",
        meta: {
            transition: "slide-out"
        },
        component: Profile
    },
    {
        path: "*",
        name: "not-found",
        component: NotFound
    }
]