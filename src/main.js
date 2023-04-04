import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes'
// import Vue from 'vue'
// import VueModal from '@kouts/vue-modal'
// import '@kouts/vue-modal/dist/vue-modal.css'
// Vue.component('VueModal', VueModal)


createApp(App).use(routes).mount('#app')
