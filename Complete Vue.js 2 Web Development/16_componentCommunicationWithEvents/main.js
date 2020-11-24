Vue.component('my-form', {
	template: '#my-form-template',
	props: {
		formTitle: String
	},
	methods: {
		onChangeNumber(event) {
			this.$emit('change-number', event.target.value);
		}
	}
});

const app = new Vue({
	el: '#app',
	data: {
		number1: 1, // To first 'my-form' component instance
		number2: 2, // To second 'my-form' component instance
		lastNumber: null
	},
	methods: {
		onChangeNumber(newNumber) {
			this.lastNumber = newNumber;
		}
	}
});
