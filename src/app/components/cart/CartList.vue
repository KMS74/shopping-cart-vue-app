<template>
  <div id="cart">
    <div class="cart--header has-text-centered">
      <i class="fa fa-2x fa-shopping-cart"></i>
    </div>

    <div v-if="!cartItems.length" class="cart-empty text has-text-centered">
      <p>Add some items to the cart!</p>
    </div>

    <ul v-else>
      <CartItem v-for="item in cartItems" :key="item.id" :item="item" />

      <div class="cart-details">
        <p>
          Total Quantity:
          <span class="has-text-weight-bold">{{ cartQuantity }}</span>
        </p>
        <p class="cart-remove-all--text" @click="clearCartItems">
          <i class="fa fa-trash"></i>Remove all
        </p>
      </div>
    </ul>
    <button :disabled="!cartItems.length" class="button is-primary">
      Checkout (<span class="has-text-weight-bold">${{ cartTotalPrice }}</span
      >)
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from './CartItem.vue';
export default {
  name: 'CartList',
  computed: {
    ...mapGetters(['cartItems', 'cartQuantity', 'cartTotalPrice']),
  },
  methods: {
    clearCartItems() {
      this.$store.dispatch('removeAllCartItems');
    },
  },
  created() {
    this.$store.dispatch('getCartItems');
  },
  components: {
    CartItem,
  },
};
</script>

<style scoped>
#cart {
  height: 100%;
  padding: 30px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-empty-text {
  padding: 10px 0;
}

.cart--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.cart-item {
  padding: 10px 0;
}

.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}

.cart-details {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
}

.cart-remove-all--text {
  cursor: pointer;
}

.cart-remove-all--text .fa {
  padding-right: 5px;
}

.cart-empty {
  padding: 10px 0;
  font-size: 1.1rem;
}
</style>
