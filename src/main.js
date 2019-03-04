// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { formatNum } from '@/utils/formatNum'
import infiniteScroll from 'vue-infinite-scroll'
import '@/components/index'
import App from './App'
import router from './router'
import store from './store'

import './css/main.scss'
import './plugins/axios'
import './plugins/vux-components'
import './mock/ui-api'

Vue.prototype.$formatNum = formatNum
Vue.use(infiniteScroll)

const FastClick = require('fastclick')

FastClick.attach(document.body)

Vue.config.productionTip = false

/* 模拟加载缓慢时的loading标签，实际开发时去掉setTimeout函数即可 */
router.beforeEach((to, from, next) => {
  store.commit('updateLoadingStatus', { isLoading: true })
  setTimeout(() => {
    next()
  }, 2000)
})

router.afterEach(() => {
  store.commit('updateLoadingStatus', { isLoading: false })
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
