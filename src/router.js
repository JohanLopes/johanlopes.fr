import { createRouter, createWebHistory } from 'vue-router'
import IndexContainer from '@/components/IndexContainer.vue'
import AsideProjectDetails from '@/components/AsideProjectDetails.vue'
import AsideLegalNotices from '@/components/AsideLegalNotices.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexContainer,
      children: [
        {
          path: '/project/:slug',
          name: 'project',
          component: AsideProjectDetails
        },
        {
          path: '/legal-notices',
          name: 'legal-notices',
          component: AsideLegalNotices
        }
      ]
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    return false
  }
})

export default router
