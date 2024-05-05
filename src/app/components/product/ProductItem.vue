<template>
  <div>
    <h2 class="has-text-weight-bold">
      {{ product.title }}
      <span
        class="tag is-primary is-pulled-right has-text-white"
        @click="addCartItem(product)"
      >
        Add to Cart
      </span>
    </h2>
    <p>
      {{ product.description }}
    </p>
    <span class="has-text-primary has-text-weight-bold">
      <i class="fa fa-usd"></i> {{ product.price }}
    </span>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  name: 'ProductItem',
  props: ['product'],
  methods: {
    ...mapActions(['addCartItem']),
  },
};
</script>
<style scoped>
.tag {
  cursor: pointer;
}
</style>
