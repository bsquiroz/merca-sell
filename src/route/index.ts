import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView/HomeView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/DashView/DashView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView/LoginView.vue"),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
