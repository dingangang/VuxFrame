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
      meta: {
        showTabbar: true
      },
      component: () => import(/* webpackChunkName: "index" */ './pages/Index/index'),
    },
    {
      path: '/search/:value',
      name: 'search',
      component: () => import(/* webpackChunkName: "index" */ './pages/SearchPage/index'),
    },
    {
      path: '/message',
      name: 'message',
      component: () => import(/* webpackChunkName: "message" */ './pages/MessagePage/index'),
    },
    {
      path: '/message-details/:id',
      name: 'message-details',
      component: () => import(/* webpackChunkName: "message" */ './pages/MessageDetails/index'),
    },
    {
      path: '/lesson-page',
      name: 'lesson-page',
      component: () => import(/* webpackChunkName: "lesson" */ './pages/LessonPage/index'),
    },
    {
      path: '/lesson-details/:id',
      name: 'lesson-details',
      component: () => import(/* webpackChunkName: "lesson" */ './pages/LessonDetails/index'),
    },
  ],
});
