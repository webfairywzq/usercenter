import Vue from 'vue'
import Router from 'vue-router'

import store from './store/index'
import {routes,asyncRoutes} from './routes'
Vue.use(Router)


const router = new Router({
  routes
})
// 设置导航守卫
router.beforeEach((to,from,next) => {
  const login = localStorage.getItem('user');
  if(to.matched.some(route => route.meta.auth)){
    if(store.state.user || login){
    // if(store.state.user){
      const user =localStorage.getItem('user');
      console.log(user);
      store.commit('setUser',user);
      
      next();
    }else{
      next('/login');
    }
  }else{
    next();
  }
})

export default router
