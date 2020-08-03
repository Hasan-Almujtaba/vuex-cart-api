import axios from "axios";
import Product from '../api/Product'
import Cart from "../api/Cart";


export const addNotification = ({ commit }, notification) => {
  commit('SET_NOTIFICATION', notification)
}

export const removeNotification = ({ commit }) => {
  commit('DELETE_NOTIFICATION')
}
