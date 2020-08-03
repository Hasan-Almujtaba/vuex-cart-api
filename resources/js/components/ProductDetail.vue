<template>
	<div>
		<v-container>
			<v-row justify="center">
				<v-col cols="12" xl="6" md="6" lg="6" sm="6" v-if="product">
					<v-card>
						<v-img :src="product.image" max-height="150"></v-img>
						<v-card-title>{{ product.title }}</v-card-title>
						<v-card-text>Price ${{ product.price }}</v-card-text>
						<v-card-text>{{ product.description }}</v-card-text>
						<v-card-actions>
							<v-text-field type="number" class="pa-3" min="1" v-model="value"></v-text-field>
							<v-btn
								color="blue darken-3"
								:loading="load"
								:disabled="load"
								@click="addToCart({product: product , quantity: value}), showLoader()"
							>ADD TO CART</v-btn>
						</v-card-actions>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
	props: ["id"],
	data() {
		return {
			value: 1,
			load: false,
		};
	},
	methods: {
		...mapActions("product", ["getProduct"]),
		...mapActions("cart", ["addToCart"]),
		showLoader() {
			this.load = true;
			setTimeout(() => {
				this.load = false;
			}, 1000);
		},
	},
	computed: {
		...mapState("product", ["product"]),
	},
	mounted() {
		this.getProduct(this.id);
	},
};
</script>
