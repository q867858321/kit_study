import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import '@/assets/element_plus_ui/index.css';


const app = createApp(App)
app.use(ElementPlus, { size: 'mini', zIndex: 3000 })
app.use(router)
app.mount("#app")
