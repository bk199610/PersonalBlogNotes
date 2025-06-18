import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/HomeView.vue'  // 示例组件
import About from '../views/AboutView.vue' // 示例组件

// 明确调用 Vue.use(VueRouter)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history', // 可选：去掉 URL 中的 # 号
  base: process.env.BASE_URL,
  routes
})

export default router