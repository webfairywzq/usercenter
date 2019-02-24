import Main from './views/Main'
import Index from './views/Index'


const asyncRoutes = [
    {
        path:'/page2',
        component:Main,
        meta:{
        roles:['admin']
        },
        children:[
        {
            path:'',
            component:() => import('./views/Page2.vue')
        }
        ]
    },
    {
        path:'/page3',
        component:Main,
        meta:{
        roles:['admin','guest']
        },
        children:[
        {
            path:'',
            component:() => import('./views/Page3.vue')
        }
        ]
    }
]

const routes = [
    {
      path:'/login',
      component:() => import('./views/Login.vue')
    },
    {
      path:'/',
      component:Main,
      meta:{
        auth:true
      },
      children:[
        {
          path:'',
          component:Index
        }
      ]
    },
    {
      path:'/page1',
      component:Main,
      children:[
        {
          path:'',
          component:() => import('./views/Page1.vue')
        }
      ]
    }
]
export {routes,asyncRoutes}