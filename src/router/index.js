import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/views/PrivacyPolicy.vue"),
  },
  {
    path: "/term-of-use",
    name: "Term Of Use",
    component: () => import("@/views/TermOfUse.vue"),
  },
  {
    path: "/legal-warning",
    name: "Leagal Warning",
    component: () => import("@/views/LegalWarning.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
