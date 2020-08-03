import Api from './Api'

const END_POINT = '/carts'

export default {
  all() {
    Api.get(END_POINT)
  },
  store(product, quantity) {
    Api.post(END_POINT, {
      product_id: product.id,
      quantity: quantity
    })
  },
  destroy(product) {
    Api.delete(`${END_POINT}/${product.id}`)
  }
}