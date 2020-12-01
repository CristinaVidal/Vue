Vue.component('my-child-component', {
	template: '<h1>My number is {{ input_number }}, thanks!</h1>',
	props: {
		input_number: {
			type: Number,
			default: 17
		}
	}
});

const app = new Vue({
	el: '#app',
	data: {
		number: 17
	}
});
