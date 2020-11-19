Vue.component('my-box', {
	template: `<div class="box" v-show="visible">
			<h1>
				<slot name="title"></slot>
			</h1>
			<p>
				<slot></slot> <!-- Default content -->
			</p>
			<div>
				<slot name="footer">BTW, I'm defaut content :o</slot>
			</div>
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
		showBox: false
	},
	methods: {
		onClickShowBox() {
			this.showBox = true;
		}
	}
});
