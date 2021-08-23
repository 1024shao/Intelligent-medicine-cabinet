<template>
  <div class="all">
    <!-- 头部区域 -->
    <Header></Header>
    <!-- 主体部分 -->
    <Main :products="productList[currentIndex].list" />
    <!-- 底部区域 -->
    <div class="footer">

    </div>
    <AddToCart />
  </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import AddToCart from '@/views/home/AddToCart'
import { getGoodsData } from '../../network/home'
export default {
  data() {
    return {
      // 所有种类的药品数据
      productList: [
        { cid: 5, list: [] },
        { cid: 1, list: [] },
        { cid: 2, list: [] },
        { cid: 3, list: [] },
        { cid: 4, list: [] },
      ],
      // 记录当前选中药品种类
      currentIndex: 0
    }
  },

  components: {
    Header,
    Main,
    AddToCart
  },
  methods: {
    // 得到所有类别商品数据
    getGoods(cid) {
      getGoodsData(cid).then(res => {
        this.productList.forEach(x => {
          if (x.cid === cid) {
            x.list = res.data
          }
        })
      })
    }
  },
  created() {
    this.$bus.$on('getCurrentIndex', (index) => {
      this.currentIndex = index
    })
    this.getGoods(1)
    this.getGoods(2)
    this.getGoods(3)
    this.getGoods(4)
    this.getGoods(5)
  },
  mounted() {
    console.log(this.productList);
  }

}
</script>

<style lang='less'>
</style>