import Index from '@views/index'

export default [{
  name: '首页',
  path: '/index',
  component: Index
},
{
  name: 'test',
  path: '/test',
  component: () => import('@views/test'),
  children: [{
    path: 'test1',
    component: () => import('@views/test/test1'),
    name: 'test1'
  },
  {
    path: 'test2',
    component: () => import('@views/test/test2'),
    name: 'test2'
  }
  ]
},
{
  path: '/',
  redirect: '/index'
}]