import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import store from './store/store';
import App from './App.vue';
import Vue from 'vue';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'https://vuejs-stock-trader-eb09b.firebaseio.com/';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
