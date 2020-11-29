/*Pages*/
const Home = {
	template: '#homepage'
};

const About = {
	template: '#aboutpage'
};
/*END Pages*/

/*App*/
const router = new VueRouter({
	routes: [{
		path: '/',
		component: Home
	}, {
		path: '/about',
		component: About
	}]
});

const app = new Vue({
	el: '#app',

	router
});
/*End App*/
