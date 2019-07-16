export default [
  { path: '/main', component: () => import('@/views/Main.vue'), name: '主页' },
  { path: '/table', component: () => import('@/views/nav1/Table.vue'), name: 'Table' },
  { path: '/form', component: () => import('@/views/nav1/Form.vue'), name: 'Form' },
  { path: '/user', component: () => import('@/views/nav1/user.vue'), name: '列表' }
]
