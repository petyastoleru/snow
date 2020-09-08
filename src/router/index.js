import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: 'New Branding Agency - Home Page',
      metaTags: [
        {
          name: 'description',
          content: 'The home page of our example app.'
        },
        {
          property: 'og:description',
          content: 'The home page of our example app.'
        }
      ]
    },
    component: Home
  },

  { path: '*', component: Home },
  {
    path: '/portfolio',
    name: 'Portfolio',
    props: true,
    meta: { title: 'Our Portfolio' },
    component: () => import(/* webpackChunkName: "about" */ '../views/Portfolio.vue')
  },

  {
    path: '/portfolioItem/:id',
    name: 'Portfolio-Item',
    meta: {
      reload: true,
      title: 'Product of New Branding Agency',
    },
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/PortfolioItemSingle.vue')
  },

  {
    path: '/blog',
    name: 'Blog',
    props: true,
    meta: { title: 'Blog' },
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  },

  {
    path: '/blog/:id',
    name: 'Blog-Item',
    meta: {
      reload: true,
      title: ' Blog - New Branding Agency'
    },
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '../views/BlogNewsSingle.vue')
  },

  {
    path: '*',
    redirect: '/'
  }

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
        selector: to.hash,
        offset: { x: 0, y: -100 }
      }
    }
    else {
      return { x: 0, y: 0 }
    }
  },
})

const DEFAULT_TITLE = "New Branding Agency"

router.afterEach((to, from) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router
