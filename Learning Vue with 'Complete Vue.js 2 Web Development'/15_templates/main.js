Vue.component('tr-person', {
	template: '#tr-person-template',
	props: {
		person: Object
	}
});

const app = new Vue({
	el: '#app',
	data: {
		people: [{
			name: 'Perónica',
			age: 27
		}, {
			name: 'Sara sin h',
			age: 14
		}, {
			name: 'Jose',
			age: 76
		}]
	}
});
