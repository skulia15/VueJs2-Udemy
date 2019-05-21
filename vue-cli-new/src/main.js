import Vue from 'vue'
import './plugins/vuetify'
import AppOther from './AppOther.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(AppOther)
}).$mount('#app')
