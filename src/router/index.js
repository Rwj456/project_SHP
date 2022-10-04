import Router from 'vue-router'

// 引入路由组件
import Home from '@/pages/Home/idnex.vue'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

const originalPush = Router.prototype.push
const originalReplace = Router.prototype.replace

Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch((err) => err)
}
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}
//配置路由
const router = new Router({
  routes: [
    {
      path: '',
      name: 'home',
      meta: { isShow: true },
      component: Home,
    },
    {
      path: '/search',
      name: 'search',
      meta: { isShow: true },
      component: Search,
    },
    {
      path: '/login',
      name: 'login',
      meta: { isShow: false },
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      meta: { isShow: false },
      component: Register,
    },
  ],
})

export default router
