//--- Configuration du projet ---//

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js';
import store from './store';


import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const VueApp = createApp(App)
VueApp.use(router)
VueApp.use(store)
VueApp.mount('#app')
