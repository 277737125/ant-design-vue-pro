export default [
  {
    path: '/user',
    component: () =>
      import(
        /* webpackChunkName: "layout" */ '../components/layouts/userLayout'
      ),
    // component: { render: h => h("router-view") },
    children: [
      {
        path: '/user',
        redirect: '/user/login'
      },
      {
        path: 'login',
        name: 'login',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/user/login')
      },
      {
        path: 'register',
        name: 'register',
        component: () =>
          import(/* webpackChunkName: "user" */ '../views/user/register')
      }
    ]
  },
  {
    path: '/',
    component: () =>
      import(
        /* webpackChunkName: "layout" */ '../components/layouts/basicLayout.vue'
      ),
    children: [
      {
        path: '/',
        redirect: 'dashboard/analysis'
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: { render: h => h('router-view') },
        children: [
          {
            path: 'analysis',
            name: 'analysis',
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ '../views/dashboard/analysis'
              )
          }
        ]
      }
    ]
  },
  {
    path: '/form',
    name: '/form',
    component: { render: h => h('router-view') }
  }
]
