import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入全局样式表
import './assets/css/global.css'
import './plugins/element.js'
//注册字体图标
import '../src/assets/iconFont/iconfont.js'
import SvgIcon from './components/SvgIcon.vue'
Vue.component('svg-icon', SvgIcon)
// 导入store
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
