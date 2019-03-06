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
    {
      path: '/activity-page',
      name: 'activity-page',
      component: () => import(/* webpackChunkName: "lesson" */ './pages/ActivityPage/index'),
    },

    {
      path: '/activity-details/:id',
      name: 'activity-details',
      component: () => import(/* webpackChunkName: "lesson" */ './pages/ActivityDetails/index'),
    },
    {
      path: '/institution-page',
      name: 'institution-page',
      component: () => import(/* webpackChunkName: "lesson" */ './pages/InstitutionPage/index'),
    },
    {
      path: '/institution-details/:id',
      name: 'institution-details',
      component: () => import(/* webpackChunkName: "lesson" */ './pages/InstitutionDetails/index'),
    },
    {
      // 请保持错误页在最后
      path: '*',
      name: 'error-page',
      component: () => import(/* webpackChunkName: "error" */ './pages/ErrorPage/index'),
    }
  ],
});
