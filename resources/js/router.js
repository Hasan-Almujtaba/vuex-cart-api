import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './pages/Home'
import Product from './pages/Product'
import Test from './pages/Test'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    name: 'home'
  }, {
    path: '/product/:id',
    component: Product,
    name: 'product',
    props: true
  }, {
    path: '/test',
    component: Test,
    name: 'test'
  }]
})
