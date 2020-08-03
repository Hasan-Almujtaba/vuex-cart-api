import Cart from "../../../api/Cart";

export const addToCart = ({ commit, dispatch }, { product, quantity }) => {
  dispatch('addNotification', 'Product Added', { root: true })

  commit("ADD_TO_CART", { product, quantity });

  Cart.store(product, quantity)
};

export const getCartItems = ({
  commit
}) => {
  Cart.all().then(response => {
    commit("SET_CART", response.data);
  });
};

export const removeFromCart = ({ commit, state }, product) => {
  state.cartLoading = true
  commit('DELETE_CART', product);

  Cart.destroy(product)

  setTimeout(() => {
    state.cartLoading = false;
  }, 1000);
}

export const toggleDialog = ({ commit }) => {
  commit('TOGGLE_DIALOG')
}
