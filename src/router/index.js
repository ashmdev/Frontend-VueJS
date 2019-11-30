import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import { Role } from "../_Helpers/role";
//import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: { authorize: [] }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/admin/Index.vue"),
    meta: { authorize: [Role.Admin] }
  },
  {
    path: "/chart",
    name: "chart",
    component: () =>
      import(/* webpackChunkName: "chart" */ "../views/Charts/Chart.vue"),
    meta: { authorize: [Role.Admin] }
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const { authorize } = to.meta;
  const user = true;

  if (authorize) {
    if (!user) {
      return next("/login");
    }
  }
  next();
});

export default router;
