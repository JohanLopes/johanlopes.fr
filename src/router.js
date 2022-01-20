import { createRouter, createWebHistory } from "vue-router";
import IndexContainer from "./components/IndexContainer";
import AsideProjectDetails from "./components/AsideProjectDetails";
import AsideLegalNotices from "./components/AsideLegalNotices";

const routes = [
  {
    path: "/",
    name: "index",
    component: IndexContainer,
    children: [
      {
        path: "/project/:slug",
        name: "project",
        component: AsideProjectDetails,
      },
      {
        path: "/legal-notices",
        name: "legal-notices",
        component: AsideLegalNotices,
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
