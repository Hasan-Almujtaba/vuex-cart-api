<template>
	<div>
		<v-container>
			<v-row>
				<v-col cols="12" xl="4" md="6" lg="6" sm="12" v-for="product in products" :key="product.id">
					<product-card :product="product"></product-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ProductCard from "../components/ProductCard";

export default {
	components: {
		ProductCard,
	},
	methods: {
		...mapActions("product", ["getProducts"]),
	},
	computed: {
		...mapState("product", ["products"]),
	},
	mounted() {
		this.getProducts();
	},
};
</script>