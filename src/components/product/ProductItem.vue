<template>
  <div class="product ">
    <!-- 每个药品展示的内容 -->
    <img :src="item.productUrl" alt="">
    <span class="productName">{{item.productName}}</span>
    <span class="content"> {{item.content}}</span>
    <span class="price"> {{item.sellPrice}}元 <i>{{item.originalPrice}}元</i></span>
    <div class="bottom fl">
      <span class="store">
        库存: <i>{{item.stock}}</i>
      </span>
      <span class="updataTime">
        跟新时间：<i>{{updateTime}}</i>
      </span>
    </div>
    <div class="addTo fr" @click="addClick">
      <SvgIcon iconName='#icon-ShoppingCartIcon' class="icon" />加入购物车
    </div>
  </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
export default {
  name: 'ProductItem',
  props: ['item'],
  components: {
    SvgIcon
  },
  computed: {
    updateTime() {
      return this.item.updateTime.substring(0, 10)
    }
  },
  methods: {
    addClick() {
      this.$bus.$emit('addToCart', this.item)
    }
  }
}
</script>

<style scoped lang='less'>
.product {
  position: relative;
  float: left;
  width: 30%;
  height: 300px;
  background-color: #fff;
  margin-right: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  img {
    width: 80%;
    height: 60%;
  }
  .productName {
    display: block;
    font-size: 16px;
    font-weight: 600;
  }
  .content {
    display: block;
    margin-top: 2px;
    font-size: 15px;
    color: #b0b0b0;
  }
  .price {
    display: block;
    margin-top: 7px;
    font-size: 16px;
    color: #008c8c;
    i {
      font-style: normal;
      margin-left: 4px;
      color: #ccc;
      text-decoration: line-through;
    }
  }
  .store {
    font-weight: 400;
    margin-top: 2px;
    margin-left: -24px;
  }
  .updataTime {
    display: block;
  }
  .bottom {
    margin-left: 4px;
    i {
      font-style: normal;
      margin-left: 4px;
      color: #59d195;
    }
  }
}
.addTo {
  cursor: pointer;
  margin-top: 4px;
  margin-right: 4px;
  background-color: #0f7aa8;
  width: 132px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  border-radius: 5px;
  .icon {
    margin-right: 10px;
    font-size: 29px;
    margin-top: 4px;
  }
}
</style>