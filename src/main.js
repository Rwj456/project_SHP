import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import router from '@/router'
// 三级联动组件---全局组件
import TypeNav from '@/components/TyepeNav'
// 引入lodash
// 引入仓库
import store from '@/store'

Vue.component(TypeNav.name, TypeNav)

Vue.config.productionTip = false

Vue.use(Router)
new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount('#app')
