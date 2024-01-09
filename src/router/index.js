import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/JobsView.vue'
import PonukaView from '../views/PonukaView.vue'
import ReagovatView from '../views/ReagovatView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/jobs',
      name: 'jobs',
      component: JobsView
    },

    {
      path: '/ponuka',
      name: 'ponuka',
      component: PonukaView
    },
    {
      path: '/reagovat',
      name: 'reagovat',
      component: ReagovatView
    },
   


  ],
})

export default router
