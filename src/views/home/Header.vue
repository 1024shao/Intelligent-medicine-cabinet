<template>
  <div class="header">
    <div class="logo">
    </div>
    <!-- 联系模块 -->
    <div class="contact ">
      <i class="icon-font icon ">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-lianxi1"></use>
        </svg>
      </i>
      <span>联系我们</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' >
.header {
  height: 100px;
  width: 100%;
  background-color: #fff;
  border-bottom: 4px solid #29abe2;
}
.logo {
  position: relative;
  display: inline-block;
  height: 100px;
  width: 275px;
  // margin-left: 80px;
  box-sizing: border-box;
  background: url(../../assets/智能药柜.png) no-repeat 50% center #fff;
  background-size: 300px;
  border-radius: 40px;
}
.contact {
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  height: 60px;
  width: 200px;
  background-color: #fff;
  border: 2px solid #29abe2;
  line-height: 60px;
  font-size: 20px;
  border-radius: 30px;
  .icon-font {
    margin: 0 20px;
    font-size: 25px;
  }
  span {
    font-weight: 500;
    color: #52d7db;
  }
}
</style>