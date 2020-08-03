<template>
	<div>
		<v-snackbar v-model="snackbar" top right color="blue-grey" timeout="3000">
			{{ notification }}
			<template v-slot:action="{ attrs }">
				<v-btn color="white" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
			</template>
		</v-snackbar>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
	props: ["notification"],
	data() {
		return {
			snackbar: true,
		};
	},
	created() {
		setTimeout(() => {
			this.removeNotification();
		}, 3000);
	},
	methods: {
		...mapActions(["removeNotification"]),
	},
};
</script>
