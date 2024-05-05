import axios from 'axios';
const state = {
  productItems: [],
  // TODO : add loading state 
  // TODO : add error state
};
const mutations = {
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
  
};
const actions = {
  getProductItems({ commit }) {
    axios.get('/api/products').then(response => {
      commit('UPDATE_PRODUCT_ITEMS', response.data);
    });
  },
};
const getters = {
  productItems: state => state.productItems,
};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
