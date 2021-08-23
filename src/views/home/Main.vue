<template>
  <div class="main ">
    <MainAside />
    <!-- 内容 -->
    <Product :pruducList='products' />
  </div>
</template>

<script>
import MainAside from './MainAside.vue'
import Product from '../../components/product/products.vue'
export default {
  props: ['products'],
  components: {
    MainAside, Product
  },
}
</script>

<style lang='less'>
.main {
  width: 80%;
  height: 70vh;
  background-color: #fff;
  margin-left: 20px;
  margin-top: 10px;
  border-radius: 10px;
  .el-aside {
    height: 100%;
    background-color: #36b2e7;
    margin-right: 20px;
  }
}
</style>