<template>
    <el-dialog title="编辑信息" :visible.sync="editStatus">
        <el-form v-if="user" :model="user">
            <el-form-item label="id" :label-width="labelWidth">
                <el-input v-model="user.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="姓名" :label-width="labelWidth">
                <el-input v-model="user.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="labelWidth">
                <el-radio v-model="user.sex" :label="1">男</el-radio>
                <el-radio v-model="user.sex" :label="0">女</el-radio>
            </el-form-item>
            <el-form-item label="年龄" :label-width="labelWidth">
                <el-input v-model="user.age" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="出生日期" :label-width="labelWidth">
                <el-date-picker :picker-options="pickOptions" @change="dateChange" v-model="user.birth" type="date"
                    placeholder="选择日期">
                </el-date-picker>
            </el-form-item>
            <el-form-item label="地址" :label-width="labelWidth">
                <el-input v-model="user.addr" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="editStatus = false">取 消</el-button>
            <el-button type="primary" :loading="editLoading" @click="editEnter" >确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
import bus from '../../bus'
import axios from '../../axios'
export default {
    data(){
        return {
            editStatus:false,
            editLoading:false,
            user:null,
            labelWidth:'90',
            pickOptions: {
                disabledDate(time) {
                    return time.getTime() > Date.now();
                }
            }
        }
    },
    methods:{
        dateChange(date){
            const d = new Date(date);
            this.user.birth = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`;
            this.user.age = new Date().getFullYear() - d.getFullYear();
        },
        editEnter(){
            return new Promise((resolve,reject) => {
                this.editLoading = true;
                axios.get('/user/edit',{params:this.user}).then(res => {
                    // console.log(res);
                    if(res.data.code === 200){
                        this.$message.success('修改成功！');
                        this.editStatus = false;
                        // console.log(this.user);
                        this.$store.commit('users/editUser',this.user);
                    }
                    this.editLoading = false;
                })
            })
        }
    },
    created(){
        // 接收到 修改的用户信息 和对应的 index
        bus.$on('editUser',({u,index}) => {
            // console.log({u,index})
            // 将 user 信息和 index 修改
            this.user = u;
            this.user.index = index;
            this.editStatus = true;
        })
    }
}
</script>

<style scoped>
.el-form{
    flex-direction: column;
}
</style>
