import Dashboard from "../page/VDashboard";

const Profile = () => import("../page/VProfile");
const NotFound = () => import("../page/static/NotFound");
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