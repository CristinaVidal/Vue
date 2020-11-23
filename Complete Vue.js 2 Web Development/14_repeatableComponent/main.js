Vue.component('team-member', {
	template: '#team-member-template',
	props: {
		person: Object,
		filter: Object,
	},
	computed: {
	},
	methods: {
		getPersonCssClass() {
			return this.person && this.person.active ? 'active' : 'inactive';
		},
		filterRow() {
			return this.filter.userState === this.person.active &&
				((!this.filter.field || !this.filter.query) || (
					this.filter.field === 'name' && this.person.name.includes(this.filter.query)
					||
					this.filter.field === 'age' && this.person.age === Number(this.filter.query)
				));
		}
	}
});

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
		filter: {
			field: '', // select
			query: '', // textbox
			userState: true // radio button
		}
	}
});
