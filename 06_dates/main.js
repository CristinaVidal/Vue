const app = new Vue({
	el: '#app',
	data: {
	},
	methods: {
		formatDate(date) {
			return date.toLocaleString('es');
		}
	}
});
