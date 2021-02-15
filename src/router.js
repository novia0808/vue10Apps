import { createRouter, createWebHistory} from 'vue-router'
import Band from './pages/Band.vue'
import Calendar from './pages/Calender.vue'
import Home from './pages/Home.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'
import Calculator from './pages/Calculator.vue'
import ReusableModal from './pages/ReusableModal.vue'
import Chat from './pages/Chats.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/band', component: Band},
  {path: '/calendar', component: Calendar},
  {path: '/markdown', component: Markdown},
  {path: '/slider', component: Slider},
  {path: '/calculator', component: Calculator},
  {path: '/reusable-modal', component: ReusableModal},
  {path: '/chat', component: Chat},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 