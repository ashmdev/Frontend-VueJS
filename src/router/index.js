import Vue from "vue";
import VueRouter from "vue-router";
import { Role } from "../_Helpers/role";
// eslint-disable-next-line no-unused-vars
import store from "../store";
// eslint-disable-next-line no-unused-vars
import jwt_decode from "jwt-decode";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: { authorize: [] }
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
      import(/* webpackChunkName: "chart" */ "../views/Charts/Chart.vue")
    //meta: { authorize: [Role.User] }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  { path: "*", redirect: "/" }
];

const router = new VueRouter({
  mode: "history",
  routes
});

// router.beforeEach((to, from, next) => {
//   const { authorize } = to.meta;
//   //verifico si la ruta esta protegida por roles
//   if (authorize) {
//     //asigno el valor del usuario del store a una constante
//     const currentUser = store.state.currentUser;
//     //si el usuario actual es nulo, lo redirecciono al login... El usuario no ha iniciado sesión
//     if (currentUser == null) {
//       return next("/login");
//     }
//     // obtengo los datos del storage... Esto significa que el usuario se logeo correctamente

//     const CurrentUserTokenDecode = jwt_decode(currentUser.token);
//     const currentUserRole = CurrentUserTokenDecode.role;
//     console.log(JSON.stringify(currentUserRole));
//     //verifico si la ruta está progegida por un rol en especifico
//     if (authorize.length && !authorize.includes(currentUserRole)) {
//       return next({ path: "/" });
//     }
//   }
//   next();
// });

export default router;
