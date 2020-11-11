const app = new Vue({
	el: '#app',
	data: {
		number: 200,
		percentage: 20
	},
	methods: {
		calculatePercentage(number, percentage) {
			return number * (percentage * 0.01)
		}
	}
});
