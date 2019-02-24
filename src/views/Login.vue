<template>
    <el-row>
        <el-col :xl="{span: 4, offset: 10}" :lg="{span: 6, offset: 9}" :md="{span: 10, offset: 7}" :sm="{span: 12, offset: 6}" :xs="24">
        <el-form ref="form" :model="user" class="login">
            <el-form-item>
            <el-input placeholder="请输入用户名" v-model="user.username"></el-input>
            </el-form-item>
            <el-form-item>
            <el-input placeholder="请输入密码" v-model="user.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
            <el-button @click="login" :loading="loading" type="primary" icon="el-icon-news">登录</el-button>
            </el-form-item>
        </el-form>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data(){
        return {
            loading:false,
            user:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        login(){
            this.loading = true;
            this.$store.dispatch('login',this.user).then(res => {
                if(res.code === 200){
                    this.$message.success('登录成功！');
                    localStorage.setItem('user',JSON.stringify(this.user));
                    this.$router.push('/');
                }else{
                    this.$message.error(res.msg);
                }
                this.loading = false;
            })
        }
    }
}
</script>

<style>
.login {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
}
</style>
