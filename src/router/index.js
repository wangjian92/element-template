import Vue from 'vue'
import Router from 'vue-router'

import moduleOne from './module/moduleOne'
import moduleTwo from './module/moduleTwo'
import pageSet from './module/pageSet'
import echart from './module/echart'

Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
      name: '',
      hidden: true
    },
    {
      path: '/404',
      component: () => import('@/views/404.vue'),
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      name: '导航一',
      iconCls: 'el-icon-message', // 图标样式class
      children: moduleOne
    },
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      name: '导航二',
      iconCls: 'fa fa-id-card-o',
      children: moduleTwo
    },
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      name: '',
      iconCls: 'fa fa-address-card',
      leaf: true,
      children: pageSet
    },
    {
      path: '/',
      component: () => import('@/views/Home.vue'),
      name: 'Charts',
      iconCls: 'fa fa-bar-chart',
      children: echart
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
