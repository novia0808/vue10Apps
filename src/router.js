import { createRouter, createWebHistory} from 'vue-router'
import Band from './pages/Band.vue'
import Calendar from './pages/Calender.vue'
import Home from './pages/Home.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'


const routes = [
  {path: '/', component: Home},
  {path: '/band', component: Band},
  {path: '/calendar', component: Calendar},
  {path: '/markdown', component: Markdown},
  {path: '/slider', component: Slider},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 