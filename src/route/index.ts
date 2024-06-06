import { createWebHistory, createRouter } from "vue-router";
import { onAuthStateChanged } from "firebase/auth";
import { useFirebaseAuth } from "vuefire";

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
    meta: { auth: true },
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

router.beforeEach(async (to, _, next) => {
  const requireAuth = to.matched.some((url) => url.meta.auth);

  if (requireAuth) {
    try {
      await verifyAuthUser();
      next();
    } catch (error) {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

function verifyAuthUser() {
  const auth = useFirebaseAuth();

  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth!, (user) => {
      if (user) {
        resolve(true);
      } else {
        reject();
      }
    });
  });
}
