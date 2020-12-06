const app = new Vue({
	el: '#app',
	data: {
		date: new Date()
	},
	computed: {
		formatDate() {
			return this.$data.date
				? `${this.$data.date.toLocaleDateString('es')} a las 
				   ${this.$data.date.getHours()}:${this.$data.date.getMinutes()}`
				: '-';
		}

	}
});







