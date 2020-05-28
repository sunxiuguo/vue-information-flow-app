import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export enum RouteNames {
    Home = "home",
    List = "list",
    Detail = "detail"
}

const List = () => import(/* webpackChunkName: "list" */ "../views/List.vue");
const Detail = () =>
    import(/* webpackChunkName: "detail" */ "../views/Detail.vue");

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: RouteNames.Home,
        component: Home,
        meta: {
            depth: 1
        }
    },
    {
        path: "/list",
        name: RouteNames.List,
        component: List,
        meta: {
            keepAlive: true,
            depth: 2
        }
    },
    {
        path: "/detail/:id",
        name: RouteNames.Detail,
        component: Detail,
        meta: {
            depth: 3
        }
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
