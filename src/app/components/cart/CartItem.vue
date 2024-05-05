<template>
  <li class="cart-item">
    <div>
      <p class="cart-item--title is-inline">{{ item.title }}</p>
      <div class="is-pulled-right">
        <button @click="addCartItem(item)" class="cart-item--modify">
          <i class="fa fa-arrow-circle-up "></i>
        </button>
        <button @click="deleteCartItem(item)" class="cart-item--modify">
          <i class="fa fa-arrow-circle-down "></i>
        </button>
      </div>
      <div class="cart-item--content">
        <span class="cart-item--price has-text-primary has-text-weight-bold">
          ${{ item.price }}
        </span>
        <span class="cart-item--quantity has-text-grey is-pulled-right">
          Quantity: {{ item.quantity }}
        </span>
      </div>
    </div>
  </li>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['addCartItem', 'deleteCartItem']),
  },
};
</script>
<style scoped>
.cart-item--modify {
  cursor: pointer;
  margin: 0 1px;
}
</style>
