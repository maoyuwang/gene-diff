import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'purecss/build/pure-min.css'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

// Add FontAwsome support
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPlus, faArrowUp, faArrowDown, faCheck,faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faTrash, faPlus, faArrowUp, faArrowDown, faCheck,faCirclePlay)
app.component('fa', FontAwesomeIcon)

app.use(pinia)
app.mount('#app')
