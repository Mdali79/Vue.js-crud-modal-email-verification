import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes'
import Toaster from '@meforma/vue-toaster';


createApp(App).use(Toaster).use(routes).mount('#app')
