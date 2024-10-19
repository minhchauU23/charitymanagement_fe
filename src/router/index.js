import AboutView from '@/views/AboutView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import ReferenceView from '@/views/ReferenceView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-route',
      component: HomeView,
      meta: {
        layout: 'user',
      },
    },
    {
      path: '/campaigns',
      name: 'campaigns-route',
      component: AboutView,
      meta: {
        layout: 'user',
      },
    },
    {
      path: '/about',
      name: 'about-route',
      component: AboutView,
      meta: {
        layout: 'user',
      },
    },
    {
      path: '/reference',
      name: 'reference-route',
      component: ReferenceView,
      meta: {
        layout: 'user',
      },
    },
    {
      path: '/login',
      name: 'login-route',
      component: LoginView,
      meta: {
        layout: 'authentication',
        disableIfLoggedIn: true,
      },
    },
    {
      path: '/register',
      name: 'register-route',
      component: RegisterView,
      meta: {
        layout: 'authentication',
      },
    },
    {
      path: '/forgot-password',
      name: 'forgot-password-route',
      component: ForgotPasswordView,
      meta: {
        layout: 'authentication',
      },
    },
  ],
})

export default router
