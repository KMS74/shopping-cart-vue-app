<template>
  <div id="products" class="box">
    <div class="products--header has-text-centered">
      <i class="fa fa-2x fa-user-circle"></i>
    </div>
    <div class="product-list">
      <div
        v-for="product in productItems"
        :key="product.id"
        class="product-list--item"
      >
        <ProductItem :product="product" />
      </div>
    </div>
    <div class="product-count has-text-right">
      <span class="has-text-weight-bold"
        ># of products: {{ productItems.length }}</span
      >
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProductItem from './ProductItem';
export default {
  name: 'ProductList',

  computed: {
    ...mapGetters(['productItems']),
  },

  components: {
    ProductItem,
  },

  created() {
    this.$store.dispatch('getProductItems');
    console.log(this.productItems);
  },
};
</script>

<style scoped>
.tag {
  cursor: pointer;
}

.products--header {
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 15px;
}

.product-list {
  padding-top: 10px;
}

.product-list--item {
  padding: 10px 0;
}
</style>
