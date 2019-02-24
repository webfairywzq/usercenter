<template>
    <el-form :inline="true" class="search">
        <el-form-item>
            <el-input :value="page.name" placeholder="请输入关键字" @input="changeName"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button :disabled="!page.name" type="primary" @click="search">查询</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="danger" v-loading="removeLoading" :disabled="!ids.length" @click="removeUsers">删除所选</el-button>
        </el-form-item>
        <el-form-item>
            <el-button type="success" @click="addUser">新增</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import bus from '../../bus'
    export default {
        data(){
            return {
                removeLoading:false
            }
        },
        computed: {
            page() {
                return this.$store.state.users.page
            },
            ids(){
                return this.$store.state.users.ids
            }
        },
        methods: {
            changeName(name) {
                // console.log(name);
                //获取到最新的name提交给mutation 修改对应的 state
                this.$store.commit('users/setPage', {
                    name
                })
            },
            search() {
                // 通知 table 去获取最新的数据
                bus.$emit('getuser')
            },
            removeUsers(){
                this.removeLoading = true;
                this.$store.dispatch('users/removeUsers',this.ids).then(() => {
                    this.removeLoading = false;
                });
            },
            addUser(){
                bus.$emit('addUser',true);
            }
        }
    }
</script>

<style>
.el-form{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}
</style>