import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Index from './components/index.vue'
import PageOne from './components/pageOne.vue'
import PageTwo from './components/pageTwo.vue'

  const router = createRouter({
 history: createWebHistory(),
   routes: [
    { path: '/', component: Index },
    { path: '/pageOne', component: PageOne },
    { path: '/pageTwo', component: PageTwo },
  ] 
  })



createApp(App).use(router).mount('#app')
