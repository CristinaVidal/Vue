Vue.component('modal-window', {
	template: `<div class="modal fade" v-show="visible">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header"></div>
					<button type="button" class="close"
						data-dimiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>
				<div class="modal-body">
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary">
						Save changes
					</button>
					<button type="button" class="btn btn-secondary"
					data-dimiss="modal">
						Close
					</button>
				</div>
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
		modalVisible: false
	},
	methods: {
		onClickOpenModal() {
			this.modalVisible = true;
		}
	}
});
