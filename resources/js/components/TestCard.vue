<template>
	<div>
		<v-container>
			<v-btn
				color="light-blue darken-1"
				class="text-decoration-none"
				:loading="load"
				:disabled="load"
				@click="showLoader()"
			>VIEW PRODUCT</v-btn>
		</v-container>
	</div>
</template>

<script>
export default {
	data() {
		return {
			load: false,
		};
	},
	methods: {
		showLoader() {
			this.load = true;
			setTimeout(() => {
				this.load = false;
			}, 1000);
		},
	},
	props: {
		source: String,
	},
};
</script>