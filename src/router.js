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
      path: '/video-player',
      name: 'video-player',
      props: true,
      component: () => import(/* webpackChunkName: "consultation" */ './pages/VideoPlayer/index'),
    },
    {
      // 请保持错误页在最后
      path: '*',
      name: 'error-page',
      component: () => import(/* webpackChunkName: "error" */ './pages/ErrorPage/index'),
    }
  ],
});
