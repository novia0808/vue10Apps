import { createApp } from 'vue'
import App from './App.vue'
// Vue.config.devtools = true;
import "./assets/stylel.css"
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')
