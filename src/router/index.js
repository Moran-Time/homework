import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect: "/about",
    children: [
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: { title: "Home" }
      },
      {
        path: '/shopp',
        component: () => import('../views/shopo/shopp.vue'),
        meta: { title: "商品管理" }
      },
      {
        path: '/shopplist',
        component: () => import('../views/shopo/shopplist.vue'),
        meta: { title: "品类管理" }
      },
      {
        path: '/order',
        component: () => import('../views/order/order.vue'),
        meta: { title: "订单管理" }
      }
    ]
  },

  {
    path: '/login',
    component: () => import('../views/Login')
  }
]

const router = new VueRouter({
  routes
})

export default router
