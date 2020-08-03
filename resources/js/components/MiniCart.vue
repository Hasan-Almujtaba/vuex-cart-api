<template>
	<div>
		<v-dialog v-model="openCart" persistent max-width="600">
			<v-card>
				<v-card-title class="headline">Cart</v-card-title>
				<v-container>
					<div v-if="cartLoading" class="text-center">
						<v-progress-circular indeterminate color="primary"></v-progress-circular>
					</div>
					<div v-else-if="cart.length">
						<v-simple-table>
							<template v-slot:default>
								<thead>
									<tr>
										<th class="text-left">#</th>
										<th class="text-left">Image</th>
										<th class="text-left">Title</th>
										<th class="text-left">Quantity</th>
										<th class="text-left">Price</th>
										<th class="text-left"></th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(item, index) in cart" :key="item.product.id">
										<td>{{ index + 1 }}</td>
										<td class="p-2">
											<v-img :src="item.product.image" max-height="50" max-width="50"></v-img>
										</td>
										<td>{{ item.product.title }}</td>
										<td>{{ item.quantity }}</td>
										<td>${{ item.product.price }}</td>
										<td class="p-2">
											<v-btn rounded color="primary darken-1" @click="removeFromCart(item.product)">
												<v-icon>mdi-delete</v-icon>
											</v-btn>
										</td>
									</tr>
								</tbody>
							</template>
						</v-simple-table>

						<v-card-text>
							<h5>Total Price : ${{ countTotalPrice }}</h5>
						</v-card-text>
					</div>

					<div v-else>
						<h4 class="text-center blue-grey--text">No Item</h4>
					</div>
				</v-container>

				<v-card-actions>
					<v-spacer></v-spacer>

					<v-btn color="primary darken-1" @click="toggleDialog()">Close</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
	data() {
		return {
			isLoading: false,
		};
	},
	computed: {
		...mapState("cart", ["cart", "openCart", "cartLoading"]),
		// ...mapGetters({
		// 	totalPrice: "countTotalPrice",
		// }),
		...mapGetters("cart", ["countTotalPrice"]),
	},
	mounted() {
		this.getCartItems();
	},
	methods: {
		...mapActions("cart", ["removeFromCart", "getCartItems", "toggleDialog"]),
	},
};
</script>
