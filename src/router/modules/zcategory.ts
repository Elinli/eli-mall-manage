import { AppRouteModule } from '/@/router/constant'

const category: AppRouteModule = {
  path: '/category',
  name: 'Category',
  component: 'Default',
  meta: {
    title: 'routes.basic.login',
  },
  redirect: '/category/index',
  children: [
    {
      path: 'index',
      name: 'index',
      component: 'category/index',
      meta: {
        title: 'routes.basic.login',
        keepAlive: true,
      },
    },
    {
      path: 'edit',
      name: 'Edit',
      component: 'category/Edit',
      meta: {
        title: 'routes.basic.login',
      },
    },
  ],
}

export default category
