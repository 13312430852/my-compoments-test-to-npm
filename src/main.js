import Vue from 'vue'
import App from './App.vue'

import simpleButton from './simpleButton/index.js'


Vue.use(simpleButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
