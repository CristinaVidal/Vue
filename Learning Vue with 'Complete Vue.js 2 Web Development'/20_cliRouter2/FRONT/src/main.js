
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';

import HomePage from './components/HomePage.vue';
import AboutPage from './components/AboutPage.vue';
import AboutPageFirst from './components/AboutPageFirst.vue';
import AboutPageSecond from './components/AboutPageSecond.vue';

Vue.config.productionTip = false;

// Routing
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: HomePage
  }, {
    path: '/about',
    component: AboutPage
  }, {
    path: '/about/first',
    component: AboutPageFirst
  }, {
    path: '/about/second',
    component: AboutPageSecond
  }]
});

new Vue({
  el: '#app',
  render: h => h(App),
  router
});
