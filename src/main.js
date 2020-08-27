import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faClock, faStar, faHeart } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faBriefcase, faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookF, faTwitter, faDribbble, faInstagram, faAngleDown, faBriefcase, faClock, faStar, faHeart, faAngleRight, faAngleLeft)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
