<template>
    <div class="header">
        <div class="title">
            <a href="" class="title-logo">
                <img src="http://demo.douco.com/admin/images/dclogo.png">
            </a>
            <div class="title-box">
                <div class="title-left">
                    DouPHP轻量级企业网站管理系统
                </div>
                <el-menu mode="horizontal" default-active="/">
                    <el-submenu index="1">
                        <template slot="title">
                            <!-- <img class="avatar" :src="user.avatar" alt="" width="28" height="28"> -->
                            {{user.username}}
                        </template>
                        <el-menu-item index="1-1">个人信息</el-menu-item>
                        <el-menu-item index="1-2">设置</el-menu-item>
                        <el-menu-item index="1-3" @click="logout">退出</el-menu-item>
                    </el-submenu>
                    <el-menu-item index="3">DouPHP+</el-menu-item>
                    <el-menu-item index="4">查看站点</el-menu-item>
                    <el-menu-item index="5">清除缓存</el-menu-item>
                    <el-menu-item index="6">消息中心</el-menu-item>
                </el-menu>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed:{
        user(){
            return JSON.parse(this.$store.state.user)
            // return this.$store.state.user
        }
    },
    methods:{
        logout(){
            this.$store.commit('setUser',null);
            localStorage.clear();
            this.$router.push('/login');
            this.$message.warning('退出登录！');
        }
    }
}
</script>

<style>
  .header {
    margin: 0 -20px;
    /* background: #D9D9D9; */
    border-bottom: 1px solid #cccccc;
  }
  .header-panel {
    height: 54px;
  }
  .title {
    /* margin: 0; */
    display: flex;
    align-items: center;
    height: 54px;
  }
  .title .title-logo{
    background: #0072C6;
    margin-right: 10px;
    margin-left: 3px;
  }
  
  .title-box{
      width: 100%;
      display: flex;
      justify-content: space-between;
  }
  .title-left{
      padding-left: 15px;
      font-size: 14px;
      color: #555555;
      font-weight: 700;
      line-height: 54px;
  }
  .title-right{
      display: flex;
      justify-content: space-around;
  }
  .title-right li a{
      display: block;
      color: #000;
      padding: 0 25px;
      font-weight: bold;
      font-size: 14px;
  }
</style>
