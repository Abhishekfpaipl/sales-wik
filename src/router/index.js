import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/privacy-policy",
    name: "privacy-policy",
    component: () => import("@/pages/PrivacyPolicy.vue"),
  },
  {
    path: "/term-of-use",
    name: "Term Of Use",
    component: () => import("@/pages/TermOfUse.vue"),
  },
  {
    path: "/legal-warning",
    name: "Leagal Warning",
    component: () => import("@/pages/LegalWarning.vue"),
  },
  {
    path: "/demo-page1",
    name: "DemoPage1",
    component: () => import("@/pages/DemoPage1.vue"),
  },
  {
    path: "/thank-you",
    name: "ThankYou",
    component: () => import("@/pages/ThankYou.vue"),
  },
  {
    path: "/demo-page2",
    name: "DemoPage2",
    component: () => import("@/pages/DemoPage2.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
