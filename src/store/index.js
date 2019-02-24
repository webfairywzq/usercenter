import Vue from 'vue'
import Vuex from 'vuex'
import users from './modules/users'
import axios from '../axios'
import {routes} from '../routes'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null
  },
  mutations: {
    setUser(state,user){
      state.user = user;
    }
  },
  actions: {
    login({commit},user){
      return new Promise((resolve,reject) => {
        axios.get('/login',{params:user}).then(res => {
          // 获取到 user 存到 vuex中
          // console.log(res);
          commit('setUser',res.data.user);
          resolve(res.data);
        })
      })
    }
  },
  modules:{
    users
  }
})
