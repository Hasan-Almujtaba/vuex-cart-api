<template>
	<div>
		<product-detail :id="id"></product-detail>
	</div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import ProductDetail from "../components/ProductDetail";
export default {
	components: {
		ProductDetail,
	},
	props: ["id"],
};
</script>
