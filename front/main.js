import '/assets/global/main.sass'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import Header from './components/Header.vue'
import Gallery from './components/Gallery.vue'
import Footer from './components/Footer.vue'

const app = createApp(App)

app.component('Header', Header)
app.component('Gallery', Gallery)
app.component('Footer', Footer)
app.use(router)
app.mount('#app')
