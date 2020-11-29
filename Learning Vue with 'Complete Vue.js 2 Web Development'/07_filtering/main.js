const app = new Vue({
	el: '#app',
	data: {
		people: [{
			name: 'Cristina',
			age: 23, 
			active: true
		}, {
			name: 'Cristina + 1',
			age: 24,
			active: false
		}, {
			name: 'Cristina + 2',
			age: 25,
			active: false
		}, {
			name: 'Cristina + 3',
			age: 26,
			active: true
		}],
		currency: '€',
		filterField: '', // select
		filterQuery: '', // textbox
		filterUserState: true // radio button
	},
	methods: {
		filterRow(person) {
			return this.filterUserState === person.active &&
				((!this.filterField || !this.filterQuery) || (
					this.filterField === 'name' && person.name.includes(this.filterQuery)
					||
					this.filterField === 'age' && person.age === Number(this.filterQuery)
				));
		}
	}
});
