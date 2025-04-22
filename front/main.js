import '/assets/global/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n.js'

import App from './App.vue'
import router from './router'

import Header from './components/Header.vue'
import Gallery from './components/Gallery.vue'
import Footer from './components/Footer.vue'

import Decoration from './components/decors/Decoration.vue'
import NowDecor from './components/decors/NowDecor.vue'
import FlowerDecor from './components/decors/FlowerDecor.vue'
import WaveDecor from './components/decors/WaveDecor.vue'
import LineDecor from './components/decors/LineDecor.vue'
import PaperDecor from './components/decors/PaperDecor.vue'
import FiveDecor from './components/decors/FiveDecor.vue'

import Item from './components/items/Item.vue'
import LargeItem from './components/items/LargeItem.vue'
import MiddleItem from './components/items/MiddleItem.vue'
import SmallItem from './components/items/SmallItem.vue'

const app = createApp(App)

// ОСНОВНЫЕ КОМПОНЕНТЫ
app.component('Header', Header)
app.component('Gallery', Gallery)
app.component('Footer', Footer)

// ДЕКОРАТОРЫ
app.component('Decoration', Decoration)
app.component('NowDecor', NowDecor)
app.component('FlowerDecor', FlowerDecor)
app.component('WaveDecor', WaveDecor)
app.component('LineDecor', LineDecor)
app.component('PaperDecor', PaperDecor)
app.component('FiveDecor', FiveDecor)

// ЭЛЕМЕНТЫ ПРОЕКТОВ
app.component('Item', Item)
app.component('LargeItem', LargeItem)
app.component('MiddleItem', MiddleItem)
app.component('SmallItem', SmallItem)

app.use(createPinia())
app.use(i18n)
app.use(router)
app.mount('#app')
