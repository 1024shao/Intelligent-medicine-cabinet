<template>
  <el-card>
    <div class="products " v-for="item in pruducList" :key="item.productId">
      <ProductItem :item='item' />
    </div>
  </el-card>
</template>

<script>
import ProductItem from '@/components/product/ProductItem'
export default {
  naem: 'Product',
  props: ['pruducList'],
  components: {
    ProductItem
  },
  data() {
    return {
      productLength: 0,
    }
  },
}
</script>

<style lang='less' >
.el-card {
  width: 83%;
  height: 97%;
  overflow: auto !important;
  box-sizing: border-box;
  background-color: #f5f5f5 !important;
}
.products {
  height: 100%;
}
</style>