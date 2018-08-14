import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './global/store';
import VueMarkdown from 'vue-markdown';

//import store from './global/store';
import { routes } from './global/routes';

Vue.use(VueRouter);
Vue.use(VueMarkdown);
Vue.use(require('vue-chartist'));

Vue.config.productionTip = false;



const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
