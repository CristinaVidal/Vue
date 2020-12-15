import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch, faUser, faChevronRight, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Estilos app
import './styles/main.scss';

// Routing
import { routes } from './router';
import VueRouter from 'vue-router';

// Firebase
import './firebase';

Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes
});

// Iconos Font Awesome
library.add(faSearch, faUser, faChevronRight, faSignOutAlt)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.use(BootstrapVue) // Instala BootstrapVue
Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})