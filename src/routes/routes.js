import DashboardLayout from '@/views/Layout/DashboardLayout.vue';
import AuthLayout from '@/views/Pages/AuthLayout.vue';

import NotFound from '@/views/NotFoundPage.vue';

const routes = [
  {
    path: '/',
    redirect: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "demo" */ '../views/Dashboard.vue')
      },
      {
        path: '/classify',
        name: 'classify',
        component: () => import(/* 레시피 게시판 "demo" */ '../views/Classify.vue')
      },
      {
        path: '/review',
        name: 'review',
        component: () => import(/* 후기 게시판: "demo" */ '../views/Review.vue')
      },
      {
        path: '/statistics',
        name: 'statistics',
        component: () => import(/* 통계 메뉴: "demo" */ '../views/Statistics.vue')
      },
      {
        path: '/introduce',
        name: 'introduce',
        component: () => import(/* 통계 메뉴: "demo" */ '../views/Introduce.vue')
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/UserProfile.vue')
      },

    ]
  },
  {
    path: '/',
    redirect: 'login',
    component: AuthLayout,
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Login.vue')
      },
      {
        path: '/register',
        name: 'register',
        component: () => import(/* webpackChunkName: "demo" */ '../views/Pages/Register.vue')
      },
      { path: '*', component: NotFound }
    ]
  }
];

export default routes;
