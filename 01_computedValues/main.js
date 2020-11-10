const app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Crisvi!'
	},
	computed: {
		messageToLower() {
			return this.message.toLowerCase();		
		}

	}
});
