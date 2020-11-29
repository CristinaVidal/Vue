const app = new Vue({
	el: '#app',
	data: {
		checkBorder: false,
		checkBackground: false,
		checkRadius: false
	},
	methods: {
		isAllSelected() {
			return this.checkBorder &&
				this.checkBackground &&
				this.checkRadius;
		}
	}
});
