import { createRouter, createWebHistory} from 'vue-router'
import band from './pages/Band.vue'
import calendar from './pages/Calender.vue'
import Home from './pages/Home.vue'


const routes = [
  {path: '/', component: Home},
  {path: '/band', component: band},
  {path: '/calendar', component: calendar}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 