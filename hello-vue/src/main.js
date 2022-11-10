import { createApp } from 'vue'
import App from './App.vue'
import HelloAPI from '@/services/HelloAPI' // @ shorthad for src directory of Vue

let app = createApp(App)

app.config.globalProperties.$hello_api = HelloAPI // making API functions available anywhere in the vue app
// as this.$hello_api.getHelloMessage()

app.mount('#app')