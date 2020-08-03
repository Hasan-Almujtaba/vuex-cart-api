<template>
	<div>
		<v-navigation-drawer v-model="drawer" app clipped>
			<v-list dense>
				<v-list-item link to="/" class="text-decoration-none">
					<v-list-item-action>
						<v-icon>mdi-home</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Home</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
				<v-list-item link>
					<v-list-item-action>
						<v-icon>mdi-format-list-bulleted</v-icon>
					</v-list-item-action>
					<v-list-item-content>
						<v-list-item-title>Product</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>

		<v-app-bar app clipped-left>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
			<v-toolbar-title>Vuex Cart</v-toolbar-title>
			<v-spacer></v-spacer>
			<v-btn @click="toggleDialog()">
				<v-icon>mdi-cart</v-icon>
				{{ countItemCart }} Cart
			</v-btn>
		</v-app-bar>
		<mini-cart></mini-cart>
	</div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MiniCart from "./MiniCart";

export default {
	components: {
		MiniCart,
	},
	props: {
		source: String,
	},
	computed: {
		...mapGetters("cart", ["countItemCart"]),
	},
	methods: {
		...mapActions("cart", ["toggleDialog"]),
	},
	data: () => ({
		drawer: false,
	}),
};
</script>
