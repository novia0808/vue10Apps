import { createRouter, createWebHistory} from 'vue-router'
import Band from './pages/Band.vue'
import Calendar from './pages/Calender.vue'
import Home from './pages/Home.vue'
import Markdown from './pages/Markdown.vue'
import Slider from './pages/Slider.vue'
import Calculator from './pages/Calculator.vue'
import ReusableModal from './pages/ReusableModal.vue'
import UserCrud from './pages/UserCrud.vue'
import Tensorflow from './pages/Tensorflow.vue'
import Chat from './pages/Chats.vue'
import store from './store/index'

const routes = [
  {path: '/', component: Home},
  {path: '/band', component: Band},
  {path: '/calendar', component: Calendar},
  {path: '/markdown', component: Markdown},
  {path: '/slider', component: Slider},
  {path: '/calculator', component: Calculator},
  {path: '/reusable-modal', component: ReusableModal},
  {
  path: '/chat', 
  component: Chat, 
  meta: { middleware: 'auth' }
  },
  { path: '/user-crud', component: UserCrud },
  { path: '/tensorflow', component: Tensorflow },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next)=>{
  if(to.meta.middleware) {
    // console.log(to.meta.middleware)
    const middleware = require(`./middleware/${to.meta.middleware}`)
    if(middleware){
      middleware.default(next, store)
    }else{
      next()
    }
  } else {
    next()
  }
})

export default router 