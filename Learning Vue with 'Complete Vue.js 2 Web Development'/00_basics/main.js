const app = new Vue({
	el: '#app',
	data: {
		message: 'Hey !!',
		price: 10 + 13,
		details: ['one', 'two', 'three']
	}
});

setTimeout(() => {
	app.message = 'Bye !! :\')';
}, 2000);
