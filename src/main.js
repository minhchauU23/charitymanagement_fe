import './assets/main.css'
import './assets/tailwind.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import UserLayout from './layout/UserLayout.vue'
import AdminLayout from './layout/AdminLayout.vue'
import { createPinia } from 'pinia'
import { useAuthStore } from './stores/authStore'

const pinia = createPinia()
const app = createApp(App)

app
  .use(pinia)
  .use(router)
  .component('user-layout', UserLayout)
  .component('admin-layout', AdminLayout)

router.beforeEach((to, from) => {
  const authStore = useAuthStore()
  //tu choi login page khi da dang nhap
  if (
    (to.name === 'login-route' || to.name === 'register-route') &&
    authStore.user
  ) {
    console.log('in false logiin')
    return from
  } else if (from.name === 'login-route' || from.name === 'register-route') {
    const authStore = useAuthStore()
    authStore.clearError()
    return true
  } else {
    return true
  }
  // return true
})
app.mount('#app')
