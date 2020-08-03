export const ADD_TO_CART = (state, { product, quantity }) => {
  let productInCart = state.cart.find(item => {
    return item.product.id === product.id;
  });

  if (productInCart) {
    productInCart.quantity += parseInt(quantity);
    return;
  }

  state.cart.push({
    product,
    quantity
  });
};

export const SET_CART = (state, cartItems) => {
  state.cart = cartItems;
};

export const DELETE_CART = (state, product) => {
  state.cart = state.cart.filter(item => {
    return item.product.id !== product.id
  })
}

export const TOGGLE_DIALOG = (state) => {
  state.openCart = !state.openCart
}
