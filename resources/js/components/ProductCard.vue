<template>
	<div>
		<v-card>
			<v-img :src="product.image" max-height="150"></v-img>
			<v-card-title>{{ product.title }}</v-card-title>
			<v-card-text>Price ${{ product.price }}</v-card-text>
			<v-card-actions>
				<v-btn
					color="blue darken-3"
					:loading="load"
					:disabled="load"
					@click="addToCart({product: product , quantity: 1}), showLoader()"
				>ADD TO CART</v-btn>
				<v-btn
					color="light-blue darken-1"
					class="text-decoration-none"
					:to="{name: 'product', params:{ id: product.id }}"
				>VIEW PRODUCT</v-btn>
			</v-card-actions>
		</v-card>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
	props: ["product"],
	data() {
		return {
			load: false,
		};
	},
	methods: {
		...mapActions("cart", ["addToCart"]),
		showLoader() {
			this.load = true;
			setTimeout(() => {
				this.load = false;
			}, 1000);
		},
	},
};
</script>
