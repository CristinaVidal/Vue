const app1 = new Vue({
	el: '#app1',
	data: {
		textValue: 'Texto de una variable',
		tableHTML: `<table class="table">
				<tr><th>Tabla HTML</th></tr>
				<tr><td>Insertada como inner HTML (v-html)</td>
			    </table>`
	}
});

const app2 = new Vue({
	el: '#app2',
	data: {
		imageSource: 'https://i.pinimg.com/564x/23/9a/de/239ade5bbe055c25bc24e0c93f14286a.jpg'
	}
});
