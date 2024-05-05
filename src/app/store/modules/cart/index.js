import axios from 'axios';
import * as types from './mutation-types';

const state = {
  cartItems: [],
  // TODO : add loading state
  // TODO : add error state
};
const mutations = {
  [types.UPDATE_CART_ITEMS](state, payload) {
    state.cartItems = payload;
  },
};
const actions = {
  getCartItems({ commit }) {
    axios.get('/api/cart').then(response => {
      commit(types.UPDATE_CART_ITEMS, response.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post('/api/cart', cartItem).then(response => {
      commit(types.UPDATE_CART_ITEMS, response.data);
    });
  },
  deleteCartItem({ commit }, cartItem) {
    axios.delete('/api/cart', { data: cartItem }).then(response => {
      commit(types.UPDATE_CART_ITEMS, response.data);
    });
  },
  removeAllCartItems({ commit }) {
    axios.delete('/api/cart/all').then(response => {
      commit(types.UPDATE_CART_ITEMS, response.data);
    });
  },
};
const getters = {
  cartItems: state => state.cartItems,
  cartTotalPrice: state => {
    return state.cartItems
      .reduce((acc, cartItem) => {
        return acc + cartItem.quantity * cartItem.price;
      }, 0)
      .toFixed(2);
  },
  cartQuantity: state => {
    return state.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0);
  },
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
