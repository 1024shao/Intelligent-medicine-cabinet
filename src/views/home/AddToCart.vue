<template>
  <div class="addToCart" v-if="isShow">
    <div class="close" @click="closeClick"></div>
    <p class="top">请选择您要的药物信息</p>
    <div class="content fl">
      <img :src="product.productUrl" alt="">
      <span class="Name">{{product.productName}}</span>
    </div>
    <div class="fr">
      <div class="describe">
        <div>{{product.content}}</div>
      </div>
      <div class="count">
        <span class="number">数量 :</span>
        <span class="counter" @click="decreament">-</span>
        <span> {{count}}</span>
        <span class="counter jia" @click="increament">+</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddToCart',
  data() {
    return {
      isShow: false,
      product: {},
      count: 1
    }
  },
  methods: {
    closeClick() {
      this.isShow = false
    },
    // 添加数量
   a() {
      console.log(11);
    }
  },
  created() {
    this.$bus.$on('addToCart', (product) => {
      this.product = product
      this.isShow = true
      console.log(this.product);
    })
  }
}
</script>

<style lang='less' scoped>
.addToCart {
  z-index: 99;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 350px;
  width: 800px;
  background-color: #fff;
  border: 4px solid #29abe2;
  border-radius: 10px;
  .top {
    height: 40px;
    width: 100%;
    line-height: 40px;
    text-indent: 25px;
    font-size: 18px;
    font-weight: 600;
    color: rgb(32, 32, 32);
    background-color: #e5f1f7;
  }
  .content {
    img {
      margin-top: 20px;
      height: 225px;
      border-radius: 10px;
    }
    .Name {
      margin-left: 20px;
      margin-top: 10px;
      display: block;
      height: 40px;
      width: 120px;
      color: #fff;
      line-height: 40px;
      text-align: center;
      font-size: 20px;
      font-weight: 600;
      border-radius: 5px;
      background-color: #29abe2;
    }
  }
  .describe {
    margin-top: 20px;
    margin-right: 100px;
    div {
      position: relative;
      width: 300px;
      height: 150px;
      background-color: #eaf3f7;
    }
    div::after {
      content: '商品描述:';
      position: absolute;
      top: -20px;
      left: -82px;
      font-size: 19px;
      color: #29abe2;
    }
  }
}
.count {
  margin-top: 20px;
  .number {
    margin-right: 10px;
  }
  .counter {
    display: inline-block;
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin: 10px;
    line-height: 25px;
    text-align: center;
    background-color: #29abe2;
    border: 1px solid;
    cursor: pointer;
  }
  .jia {
    margin-left: 13px;
  }
}
.close {
  display: block;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: url(../../assets/img/close.jpg) no-repeat;
  background-size: 30px 30px;
  position: absolute;
  right: 9px;
  top: 6px;
  cursor: pointer;
}
</style>