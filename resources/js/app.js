import Vue from 'vue'
import Vuetify from 'vuetify'


import router from './router'
import store from './store'

import App from './App.vue'

Vue.use(Vuetify)


const app = new Vue({
    router,
    store,
    vuetify: new Vuetify(),
    render: h => h(App)
}).$mount('#app');
