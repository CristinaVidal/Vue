Vue.component('my-box', {
	template: `<div class="box" v-show="visible">
			<h1>Title</h1>
			<p>
				<slot></slot>
			</p>
		   </div>`,
	props: {
		visible: {
			type: Boolean,
			default: false
		}
	}
});

const app = new Vue({
	el: '#app',
	data: {
		buttonClicked: false
	},
	methods: {
		onClickShowBox() {
			this.buttonClicked = true;
		}
	}
});
