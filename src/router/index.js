import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/portfolio',
    name: 'Portfolio',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },

  {
    path: '/portfolioItem/id:id',
    name: 'Portfolio-Item',
    meta: {
      reload: true
    },
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/PortfolioItemSingle.vue')
  },

  {
    path: '/blog',
    name: 'Blog',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },

  {
    path: '/blog/id:id',
    name: 'Blog-Item',
    meta: {
      reload: true
    },
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogNewsSingle.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active",
  scrollBehavior: function (to) {
    if (to.hash) {
      return {
        selector: to.hash
      }

    }
  },
})

export default router
