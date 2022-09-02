import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import ConfigView from "../views/ConfigView.vue";
import YouNeedToLogin from "../views/YouNeedToLogin.vue";
import AdminDash from "../views/admin/AdminDash.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LOG PLEASE",
      component: YouNeedToLogin,
    },
    {
      path: "/dash",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/config",
      name: "config",
      component: ConfigView,
    },
    {
      path: "/admin",
      name: "admin",
      component: AdminDash,
    },
  ],
});

export default router;
