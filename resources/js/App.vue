<template>
	<v-app>
		<app-header />
		<v-main>
			<notification
				v-for="(notification, index) in notifications"
				:key="index"
				:notification="notification"
			/>
			<transition name="fade" mode="out-in">
				<router-view />
			</transition>
		</v-main>
	</v-app>
</template>

<script>
import { mapState } from "vuex";
import AppHeader from "./components/AppHeader";
import Notification from "./components/Notification";

export default {
	components: {
		AppHeader,
		Notification,
	},
	created() {
		this.$vuetify.theme.dark = true;
	},
	computed: {
		...mapState(["notifications"]),
	},
};
</script>

<style scoped>
	.router-link-active {
		color: red;
	}

	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 0.3s ease;
	}

	.fade-leave {
	}

	.fade-leave-active {
		transition: opacity 0.3s ease;
		opacity: 0;
	}
</style>