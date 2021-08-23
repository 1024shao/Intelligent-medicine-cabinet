<template>
  <!-- 列表 -->
  <el-aside width="15%" class="fl">
    <ul>
      <li v-for="(item,index) in asideList" :key="item.id" :class="{active:currentIndex ===index? true :false}"
        @click="itemClick(index)">
        <i class="icon-font icon ">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.icon"></use>
          </svg>
        </i>
        {{item.name}}
      </li>
    </ul>
  </el-aside>
</template>

<script>
export default {
  name: 'MainAside',
  data() {
    return {
      // asideList: ['热门', '感冒药', '止疼药', '外伤药', '消炎药']
      asideList: [
        //根据不同的queryInfo渲染不同种类的药物
        { id: 5, name: '热门', icon: '#icon-tuijian1', isActive: true },
        { id: 1, name: '消炎药', icon: '#icon-xiaoyan', isActive: false },
        { id: 2, name: '感冒药', icon: '#icon-yaowu1', isActive: false },
        { id: 3, name: '止血药', icon: '#icon-ic_ganmaozhishu', isActive: false },
        { id: 4, name: '消肿药', icon: '#icon-waishang', isActive: false },
      ],
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$bus.$emit('getCurrentIndex', index)
    }
  }
}
</script>
<style scoped lang='less' scoped>
.el-aside {
  border-radius: 10px;
  ul {
    background-color: rgb(245, 237, 237);
    padding: 10px 0;
    border-radius: 10px;
  }
}
.el-aside ul li {
  height: 68px;
  font-size: 20px;
  line-height: 68px;
  color: #fff;
  background-color: #00a5e5;
  border: 2px solid #fff;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  margin: -2px 0 10px 0;
  .icon {
    font-size: 1.1em;
    margin-right: 4px;
  }
}
.el-aside ul li:nth-child(1) {
  margin-top: 0;
}
.el-aside .active {
  background-color: #fff;
  color: #00a5e5;
  border: 2px solid #00a5e5;
  .icon {
    font-size: 1.3em;
  }
}
</style>