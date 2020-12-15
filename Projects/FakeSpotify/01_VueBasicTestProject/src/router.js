import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Home from './views/Home.vue';
import SearchResults from './views/SearchResults.vue';
import NotFound from './views/NotFound.vue';

export const routes = [{
    path: '/login',
    name: 'login',
    component: Login,
}, {
    path: '/register',
    name: 'register',
    component: Register,
}, {
    path: '/',
    component: Home
}, {
    path: '/search',
    component: SearchResults
}, {
    path: '/not-found',
    component: NotFound
}];