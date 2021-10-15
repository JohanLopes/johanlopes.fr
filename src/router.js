import { createRouter, createWebHistory } from "vue-router";
import Index from "./components/Index";
import Project from "./components/Project";
import LegalNotices from "./components/LegalNotices";

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
    children: [
      {
        path: "/project/:slug",
        name: "project",
        component: Project,
      },
      {
        path: "/legal-notices",
        name: "legal-notices",
        component: LegalNotices,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    return false;
  },
});

export default router;
