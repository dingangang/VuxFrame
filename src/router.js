import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
    },
    {
      path: '/index',
      name: 'index',
      component: () => import(/* webpackChunkName: "index" */ './pages/Index/index'),
    },
    {
      path: '/search/:value',
      name: 'search',
      meta: {
        noTabbar: true
      },
      component: () => import(/* webpackChunkName: "index" */ './pages/SearchPage/index'),
    },
    {
      path: '/message',
      name: 'message',
      meta: {
        noTabbar: true
      },
      component: () => import(/* webpackChunkName: "index" */ './pages/MessagePage/index'),
    },
  ],
});
