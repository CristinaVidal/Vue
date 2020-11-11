const app = new Vue({
	el: '#app',
	data: {
		visible: true,
		edad: 20,
		retirementAge: 67,
		people: [{
				name: 'Selene',
				age: 22
			}, {
				name: 'Cristina',
				age: 23
			}, {
				name: 'Perónica',
				age: 68
			}]
	},
	methods: {
		getStatus(actualAge) {
			return actualAge >= this.retirementAge
				? 'Jubilado'
				: (this.retirementAge - actualAge) + ' años restantes que podrías cotizar ! Uoaoh !!'
		}
	}
});
