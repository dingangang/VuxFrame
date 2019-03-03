import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/parent/index',
    },
    {
      path: '/parent/index',
      name: 'parent-index',
      component: () => import(/* webpackChunkName: "parent" */ './pages/Parents/Index/index'),
    },
  ],
});
