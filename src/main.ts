import './assets/styles/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { vReveal } from './composables/useReveal'

createApp(App).directive('reveal', vReveal).mount('#app')
