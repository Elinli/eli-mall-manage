import { AppRouteModule } from '/@/router/constant'

const category: AppRouteModule = {
  path: '/category',
  name: 'Category',
  icon: 'menu-home',
  component: 'Layout',
  meta: {
    title: '分类',
    type: 'M',
  },
  redirect: '/category/index',
  children: [
    {
      path: 'index',
      name: 'index',
      component: 'category/index',
      meta: {
        title: '分类',
        keepAlive: true,
        type: 'M',
      },
    },
    {
      path: 'edit',
      name: 'Edit',
      component: 'category/Edit',
      meta: {
        title: '编辑',
      },
    },
  ],
}

export default category
