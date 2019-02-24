import axios from '../../axios'

export default {
    namespaced:true,
    state:{
        all:[],
        total:0,
        page:{
            page:1,
            pagesize:10,
            name:''
        },
        ids:[]
    },
    actions:{
        setUsers({commit,state}){
            return new Promise((resolve,reject) => {
                axios.get('/user/listpage',{
                    params:state.page
                }).then(res => {
                    if(res.data.status === 200){
                        commit('setUsers',res.data.users.users);
                        commit('setTotal',res.data.users.total);
                        resolve();
                    }
                })
            })
        },
        removeUser({commit},{id,index}){
            return new Promise((resolve,reject) => {
                axios.get('/user/remove',{
                    params:{id}
                }).then(res => {
                    //成功后，根据index 删除state中all里对应数据
                    commit('removeUser',index);
                    resolve();
                })
            })
        },
        ids({commit},ids){
            // 接收到 ids 提交mutation 存储到 state.ids中
            commit('ids',ids);
        },
        removeUsers({commit},ids){
            return new Promise((resolve,reject) => {
                axios.get('/user/batchremove',{
                    params:{
                        ids:ids.join(',')
                    }
                }).then(res => {
                    // console.log(res);
                    commit('removeUsers',ids);
                    resolve();
                })
            })
        }
    },
    mutations:{
        setUsers(state,user){
            state.all = user
        },
        setTotal(state,total){
            state.total = total;
        },
        setPage(state,page){
            state.page = {...state.page,...page};
        },
        removeUser(state,index){
            state.all.splice(index,1);
        },
        ids(state,ids){
            state.ids = ids;
        },
        removeUsers(state,ids){
            state.all = state.all.filter(users => !ids.includes(users.id))
        },
        editUser(state,user){
            // 将 all中 对应的user.index 的数据 替换成 修改后的 user
            state.all.splice(user.index,1,user)
        },
        addUser(state,user){
            state.all.unshift(user);
        }
    }
}