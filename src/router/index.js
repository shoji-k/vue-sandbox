import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/pages/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/components/pages/About"),
  },
  {
    path: "/announces",
    name: "AnnounceForm",
    component: () => import("@/components/organisms/Announces/Form"),
  },
  {
    path: "/announces/:id",
    name: "AnnounceFormEdit",
    component: () => import("@/components/organisms/Announces/Form"),
  },
  {
    path: "/editor",
    name: "Editor",
    component: () => import("@/components/pages/Editor"),
  },
  {
    path: "/form",
    name: "Form",
    component: () => import("@/components/pages/Form"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/pages/Login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
