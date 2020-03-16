import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
]

export const asyncRoutes = [
  {
    path: '/singleChar',
    component: Layout,
    redirect: '/singleChar/searchInfo',
    meta: { title: '单字查询', noCache: true },
    children: [
      {
        path: '/singleChar/searchInfo',
        component: () => import('@/views/singleChar/index'),
        name: '单字查询',
        meta: { title: '单字查询', icon: 'edit', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/shapeRelations',
    component: Layout,
    redirect: '/shapeRelations/searchShape',
    meta: { title: '字形关系', noCache: true },
    children: [
      {
        path: '/shapeRelations/searchShape',
        component: () => import('@/views/shapeRelations/index'),
        name: '字形关系',
        meta: { title: '字形关系', icon: 'edit', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/meaningRelations',
    component: Layout,
    redirect: '/meaningRelations/searchShape',
    meta: { title: '字义关系', noCache: true },
    children: [
      {
        path: '/meaningRelations/searchShape',
        component: () => import('@/views/meaningRelations/index'),
        name: '字义关系',
        meta: { title: '字义关系', icon: 'edit', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/pronounceRelations',
    component: Layout,
    redirect: '/pronounceRelations/searchShape',
    meta: { title: '字音关系', noCache: true },
    children: [
      {
        path: '/pronounceRelations/searchShape',
        component: () => import('@/views/pronounceRelations/index'),
        name: '字音关系',
        meta: { title: '字音关系', icon: 'edit', roles: ['admin'] }
      }
    ]
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
