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
      component: () => import(/* webpackChunkName: "institution" */ './pages/InstitutionPage/index'),
    },
    {
      path: '/institution-details/:id',
      name: 'institution-details',
      component: () => import(/* webpackChunkName: "institution" */ './pages/InstitutionDetails/index'),
    },
    {
      path: '/institution-comment/:id',
      name: 'institution-comment',
      component: () => import(/* webpackChunkName: "institution" */ './pages/InstitutionComment/index'),
    },
    {
      path: '/consultation-page',
      name: 'consultation-page',
      meta: {
        showTabbar: true
      },
      component: () => import(/* webpackChunkName: "consultation" */ './pages/ConsultationPage/index'),
    },
    {
      path: '/user-center',
      name: 'user-center',
      meta: {
        showTabbar: true
      },
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserCenter/index'),
    },
    {
      path: '/user-consultant',
      name: 'user-consultant',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserCenter/subpages/UserConsultant'),
    },
    {
      path: '/user-points',
      name: 'user-points',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserCenter/subpages/UserPoints'),
    },
    {
      path: '/user-lessons',
      name: 'user-lessons',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserCenter/subpages/UserLessons'),
    },
    {
      path: '/user-activity',
      name: 'user-activity',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserCenter/subpages/UserActivity'),
    },
    {
      path: '/user-collection',
      name: 'user-collection',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserCenter/subpages/UserCollection'),
    },
    {
      path: '/user-files',
      name: 'user-files',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserFiles/index'),
    },
    {
      path: '/order-page',
      name: 'order-page',
      component: () => import(/* webpackChunkName: "order" */ './pages/OrderPage/index'),
    },
    {
      path: '/order-refund/:orderId',
      name: 'order-refund',
      component: () => import(/* webpackChunkName: "order" */ './pages/OrderRefund/index'),
    },
    {
      path: '/modi-birthday',
      name: 'modi-birthday',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserFiles/subpages/ModiBirthday'),
    },
    {
      path: '/modi-name',
      name: 'modi-name',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserFiles/subpages/ModiName'),
    },
    {
      path: '/modi-sex',
      name: 'modi-sex',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserFiles/subpages/ModiSex'),
    },
    {
      path: '/modi-nickname',
      name: 'modi-nickname',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserFiles/subpages/ModiNickname'),
    },
    {
      path: '/modi-interests',
      name: 'modi-interests',
      component: () => import(/* webpackChunkName: "user-center" */ './pages/UserFiles/subpages/ModiInterests'),
    },
    {

      path: '/sign-in-page-student',
      name: 'sign-in-page-student',
      component: () => import(/* webpackChunkName: "sign-in" */ './pages/SignInPageStudent/index'),
    },
    {
      path: '/sign-in-page-parents',
      name: 'sign-in-page-parents',
      component: () => import(/* webpackChunkName: "sign-in" */ './pages/SignInPageParents/index'),
    },
    {
      path: '/leave-form',
      name: 'leave-form',
      component: () => import(/* webpackChunkName: "sign-in" */ './pages/LeaveForm/index'),
    },
    {
      path: '/membership-page',
      name: 'membership-page',
      component: () => import(/* webpackChunkName: "membership" */ './pages/MembershipPage/index'),
    },
    {
      path: '/video-player',
      name: 'video-player',
      props: true,
      component: () => import(/* webpackChunkName: "consultation" */ './pages/VideoPlayer/index'),
    },
    {
      path: '/layimmobile',
      name: 'layimmobile',
      props: true,
      component: () => import(/* webpackChunkName: "consultation" */ './pages/layimmobile/index'),
    },
    {
      // 请保持错误页在最后
      path: '*',
      name: 'error-page',
      component: () => import(/* webpackChunkName: "error" */ './pages/ErrorPage/index'),
    }
  ],
});
