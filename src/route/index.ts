import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView/LoginView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("../views/DashView/DashLayout.vue"),
    children: [
      {
        path: "/admin/create",
        name: "admin-create",
        component: () =>
          import("../views/DashView/DashCreateView/DashCreateView.vue"),
      },
      {
        path: "/admin/edit/:id",
        name: "admin-edit",
        component: () =>
          import("../views/DashView/DashEditView/DashEditView.vue"),
      },
      {
        path: "/admin/list",
        name: "admin-list",
        component: () =>
          import("../views/DashView/DashListView/DashListView.vue"),
      },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
