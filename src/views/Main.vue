<template>
    <el-container>
        <el-header>
            <user-header></user-header>
        </el-header>
        <el-container>
            <el-aside>
                <aside-menu></aside-menu>
            </el-aside>
            <el-main>
                <ul class="content-header">
                    <li>
                        <a href="">
                            <i></i>
                            <span>快速新建</span>
                            <i></i>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i></i>
                            <span>帮助中心</span>
                        </a>
                    </li>
                </ul>
                <router-view></router-view>
            </el-main>
        </el-container>
        <user-edit></user-edit>
        <user-add></user-add>
    </el-container>
</template>

<script>
import asideMenu from '../components/menu/asideMenu'
import userHeader from '../components/menu/userHeader'
import userEdit from '../components/edit/userEdit'
import userAdd from '../components/edit/userAdd'
export default {
    components:{
        asideMenu,
        userHeader,
        userEdit,
        userAdd
    }
}
</script>

<style>
.content-header{
    margin: 0;
    padding: 0;
    background: #fff;
    border-bottom: 1px solid #e5e5e5;
    height: 45px;
    line-height: 45px;
    color: #A0A0A0;
    font-weight: bold;
    display: flex;
}
.content-header li a{
    font-size: 14px;
    display: block;
    padding: 0 25px 0 20px;
    color: #626262;
}
</style>
