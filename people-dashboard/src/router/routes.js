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
        component: Dashboard
    },
    {
        path: "/profile",
        name: "profile",
        component: Profile
    },
    {
        path: "*",
        name: "not-found",
        component: NotFound
    }
]