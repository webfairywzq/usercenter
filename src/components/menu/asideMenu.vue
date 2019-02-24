<template>
    <!-- <el-menu default-active="/" router>
        <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>导航一</span>
            </template>
            <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="/">用户管理</el-menu-item>
                <el-menu-item index="/page1">页面1</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
        </el-menu-item>
    </el-menu> -->
    <div class="nav">
        <div class="nav-header">
            <i class="el-icon-news"></i>
            <span slot="title">管理首页</span>
        </div>
        <el-menu router default-active="/" class="el-menu-vertical-demo">
            <el-menu-item index="/">
                <i class="el-icon-setting"></i>
                <span slot="title">用户管理</span>
            </el-menu-item>
            <el-menu-item index="/page1">
                <i class="el-icon-share"></i>
                <span slot="title">自定义导航栏</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-picture-outline"></i>
                <span slot="title">首页幻灯广告</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-tickets"></i>
                <span slot="title">单页面管理</span>
            </el-menu-item>
            <el-menu-item index="5">
                <i class="el-icon-menu"></i>
                <span slot="title">商品分类</span>
            </el-menu-item>
            <el-menu-item index="6">
                <i class="el-icon-menu"></i>
                <span slot="title">商品列表</span>
            </el-menu-item>
            <el-menu-item index="7">
                <i class="el-icon-edit-outline"></i>
                <span slot="title">文章分类</span>
            </el-menu-item>
            <el-menu-item index="8">
                <i class="el-icon-document"></i>
                <span slot="title">文章列表</span>
            </el-menu-item>
            <el-menu-item index="9">
                <i class="el-icon-refresh"></i>
                <span slot="title">数据备份</span>
            </el-menu-item>
            <el-menu-item index="10">
                <i class="el-icon-mobile-phone"></i>
                <span slot="title">手机版</span>
            </el-menu-item>
            <el-menu-item index="11">
                <i class="el-icon-tickets"></i>
                <span slot="title">设置模板</span>
            </el-menu-item>
            <el-menu-item index="12">
                <i class="el-icon-bell"></i>
                <span slot="title">网络管理员</span>
            </el-menu-item>
            <el-menu-item index="13">
                <i class="el-icon-edit"></i>
                <span slot="title">操作记录</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
.nav-header{
        width: 170px;
        background: rgb(255, 255, 255);
        height: 25px;
        padding: 10px 20px;
        color: rgb(25, 180, 234);
        border-bottom: 1px solid rgb(229,229,229);
    }
    .nav-header i{
        font-size: 18px;
        margin-right: 5px;
        width: 24px;
        text-align: center;
        vertical-align: middle;
    }
    .nav-header span{
        line-height: 25px;
        vertical-align: middle;
        cursor: pointer;
    }
    .el-menu-vertical-demo{
        border: none;
    }
    .el-menu-vertical-demo li{
        width: 210px !important;
        height: 38px;
        line-height: 38px;
        padding: 0px !important;
        padding-left: 20px !important;
    }
</style>